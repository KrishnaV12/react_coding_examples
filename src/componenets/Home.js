import React from "react"
import { Link } from "react-router-dom";
import Login from "./Login"
import Register from "./Register"

const Home = () => {
    return (
        <div>
            <h1>Welcome to My React App</h1>
            <p>This is the Home page.</p>
            <div className="d-flex g-3">
                <Link to="/">Home</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Register">Register</Link>
            </div>
            <Login />
            <Register />


        </div>
    )
}
export default Home

