import React, { useState } from 'react';
import { generateAccessTokenForAdmin, verifyEmail } from '../components/hooks/adminEmailVerification.js';
import { Link, useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../components/hooks/firabase/setUp.js';
import { useAuthContext } from '../components/context/AuthContext.js';

const Login_admin = () => {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [Loading, setLoading] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const { authUser, setAuthUser } = useAuthContext()
    const navigate = useNavigate()


    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                auth,
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: (response) => {
                        onSignup();
                    },
                    "expired-callback": () => { },
                }
            );
        }
    }

    function onSignup(ph) {
        setLoading(true);
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;
        const formatPh = "+91" + ph;
        console.log(formatPh)
        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setLoading(false);
                setOtpSent(true);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }


    async function onOTPVerify(otpNumber) {
        setLoading(true);
        window.confirmationResult
            .confirm(otpNumber)
            .then(async (res) => {
                const data = await generateAccessTokenForAdmin()
                localStorage.setItem("User", JSON.stringify(data));
                console.log("generateAccessTokenForAdmin", data);
                setAuthUser(data)

                console.log(res.user);
                // setCookie('authToken', data.token, 7)
                setLoading(false);
                navigate('/admin/profile')
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleOtpChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleEmailSendToServer = async (e) => {
        e.preventDefault();
        setOtpSent(true);
        console.log(email);
        const data = await verifyEmail(email);
           
        console.log(data?.phoneNumber)
        if (data) {

            setPhoneNumber(data.phoneNumber);
            const ph = data.phoneNumber
            console.log(ph)
            onSignup(ph)
        }
    };

    const handleOTPEnter = (e) => {
        e.preventDefault();
        const otpString = otp.join('');
        const otpNumber = Number(otpString);
        console.log(otpNumber);
        onOTPVerify(otpNumber)
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 text-black bg-custom-gradient">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
                {!otpSent ? (
                    <form onSubmit={handleEmailSendToServer} className="space-y-6">
                        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div id='recaptcha-container'></div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Send OTP
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleOTPEnter} className="space-y-6">
                        <h2 className="text-2xl font-bold text-center text-gray-900">Enter OTP</h2>
                        <div className="flex justify-center space-x-2">
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    className="w-12 h-12 text-center border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    value={data}
                                    onChange={(e) => handleOtpChange(e.target, index)}
                                    onFocus={(e) => e.target.select()}
                                />
                            ))}
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <div id='recaptcha-container'></div>
                            Verify OTP
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login_admin;
//  aniketsinha.corporateyatra@gmail.com