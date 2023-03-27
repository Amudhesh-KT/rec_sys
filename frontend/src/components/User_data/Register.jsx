import React, { useState } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Routes,
    useNavigate,
    NavLink,
    Route,
    Link,
} from "react-router-dom";
import "../../App.css"


const Register = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [Email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    let flag = false
    // const [confrimPassword, setconfrimPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: name,
            email_id: Email,
            // company: company,
            password: password,
            // confrimPassword: confrimPassword
        };
        const result = axios
            .post("http://127.0.0.1:8000/register", data)
            .then((response) => {
                console.log(response);
                flag = true
                alert("user registered successfully");
                navigate('/')

            })
            .catch((error) => {
                alert(error);
            });
        if (flag == true) {
            console.log("Hii")
        }
    };
    return (
        <div className="register_form">
            <div className="text-center m-5-auto">
                <h2>Join us</h2>
                <h5>Create your personal account</h5>
                <form style={{
                    marginTop: "10px",
                    marginLeft: "5px",
                    border: "solid 1px",
                    width: "max-content",
                    borderColor: "green",
                }}
                    onSubmit={handleSubmit}>
                    <p>
                        <label>Username</label><br />
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </p>
                    <p>
                        <label>Email address</label><br />
                        <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} required />
                    </p>
                    <p>
                        <label>Password</label><br />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </p>
                    <p>
                        <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                    </p>
                    <p>
                        <button id="sub_btn" type="submit" onSubmit={handleSubmit}>Register</button>
                    </p>
                    <p><Link to="/">Back to Homepage</Link>.</p>
                </form>
            </div>
        </div>
    )
}

export default Register