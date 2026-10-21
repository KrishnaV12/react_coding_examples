import React, { useState } from "react"

import axios from "axios"

const Login = () => {
    const [loginData, setLoginData] = useState({
        name: "",
        password: ""
    })





    const handleNameChange = (e) => {
        setLoginData({ ...loginData, name: e.target.value })
    }
    const handlePasswordChange = (e) => {
        setLoginData({ ...loginData, password: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formNewData = {
            name: loginData.name,
            password: loginData.password
        }

        axios.get(`http://localhost:3000/login`, formNewData).then((response) => {
            console.log(response);
        }).catch((err) => { })

        console.log(formNewData, "login");
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <label for="login">
                    Name:
                </label>
                <input type="text" name="login" value={loginData.name} placeholder="Enter your name" onChange={handleNameChange} />
                <label for="password">Password</label>
                <input type="password" name="password" value={loginData.password} placeholder="Enter your password" onChange={handlePasswordChange} />
                <button type="submit">Submit</button>
            </form>

        </>
    )
}

export default Login