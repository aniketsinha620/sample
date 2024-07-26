import React, { useState } from 'react';




const verifyEmail = async (email) => {

    console.log(email)
    try {
        const res = await fetch("http://localhost:8080/api/v1/adminVerify/adminLogin", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email
            })

        })

        if (res) {
            const data = await res.json()

            return data.message
        }
    }
    catch (error) {
        console.log("adminverification", error)
    }
}

const generateAccessTokenForAdmin = async () => {

    try {
        const phoneNumber = 7903499364
        const res = await fetch("http://localhost:8080/api/v1/adminVerify/adminLogin/accessToken", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                phoneNumber
            })
        })
        if (res) {
            const data = await res.json()
            // console.log(data)
            return data;
        }
    }
    catch (error) {
        console.log(error)
    }

}

export {
    verifyEmail,
    generateAccessTokenForAdmin
}
