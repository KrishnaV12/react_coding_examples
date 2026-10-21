import React, { useState } from 'react'

const Register = () => {
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [error, setError] = useState("")
    console.log(registerData, "register");
    const handleChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value })
        console.log(e.target.name, "register");
    }
    const handleInputCopyPaste = (e) => {
        e.preventDefault()
    }
    const validateForm = () => {
        let errors = []
        if (registerData.name.trim() === "") {
            errors.push("Name is required")
        }
        if (registerData.email.trim() === "") {
            errors.push("Email is required")
        } else if (!/^\S+@\S+\.\S+$/.test(registerData.email)) {
            errors.push("Invalid email format")
        }
        if (registerData.password.trim() === "") {
            errors.push("Password is required")
        } else if (registerData.password.length < 8) {
            errors.push("Password must be at least 8 characters long")
        }
        if (registerData.confirmPassword !== registerData.password) {
            errors.push("Passwords do not match")
        }
        return errors
    }
    const handleRegister = (e) => {
        e.preventDefault()
        console.log("true");
        let errors = validateForm()
        if (errors.length > 0) {
            setError(errors)
            return
        } else {
            setError("")
        }
        const formNewData = {
            name: registerData.name,
            email: registerData.email,
            password: registerData.password,
            confirmPassword: registerData.confirmPassword
        }
        console.log(formNewData, "register");

        const uploadData = async () => {
            try {
                const response = await axios.post("http://localhost:3000/register", formNewData)
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }
        uploadData()

        axios.post(`axios.post("http://localhost:3000/register", formNewData)`)
            .then((res) => {
                console.log(res);
            }).catch((err) => {
                log(err)
            })

        axios.post("http://localhost:3000/register", formNewData, {
            headers: {
                "x-auth": token
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <div>
            <div>Register</div>
            <form onSubmit={handleRegister}>
                <label for="name">Name:</label>
                <input type="text" name="name" value={registerData.name} placeholder='Enter your name' onChange={handleChange} />
                <label for="email">Email:</label>
                <input type="email" name="email" value={registerData.email} placeholder='Enter your email' onChange={handleChange} />
                <label for="password">Password:</label>
                <input type="password" name="password" value={registerData.password} placeholder='Enter your password' onChange={handleChange} onCopy={handleInputCopyPaste} onPaste={handleInputCopyPaste} />
                <label for="confirmPassword">Confirm Password:</label>
                <input type="password" name="confirmPassword" value={registerData.confirmPassword} placeholder='Confirm Password' onChange={handleChange} onCopy={handleInputCopyPaste} onPaste={handleInputCopyPaste} />
                <button type="submit">Register</button>
            </form>
            <div>{error}</div>
        </div>
    )
}

export default Register
