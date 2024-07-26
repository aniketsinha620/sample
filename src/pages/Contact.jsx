import React, { useState } from 'react';

import ConatctMapdashboard from './ContactMap';
function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can handle form submission logic here
        // Reset form after submission if needed
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="container mx-auto w-[80%] flex flex-col lg:flex-row items-center justify-center py-8 lg:py-16">
            {/* Left component (image) */}
            <div className="lg:w-1/2 lg:pr-8 w-[100%]">
                <img src="Location.png" alt="Contact Image" className="w-full rounded-lg block md:hidden shadow-lg" />
                <div className='w-[100%] hidden md:block'>
                <ConatctMapdashboard scordinate="86.4737" dcordinate="23.6546" />

                </div>
            </div>

            {/* Right component (contact form) */}
            <div className="lg:w-1/2 lg:pl-8">
                <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-indigo-500">Contact Us</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block font-semibold">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full border border-gray-300 rounded-lg py-2 px-4"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-semibold">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border border-gray-300 rounded-lg py-2 px-4"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block font-semibold">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            className="w-full border border-gray-300 text-black rounded-lg py-2 px-4"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
