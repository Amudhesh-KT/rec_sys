import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import User_context from "../components/User_context.jsx"

import axios from "axios"
import "../App.css"


export const Login = () => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };


  // Usestates definition
  const [input, setInput] = useState({ email: "", password: "" });
  const [errorMessage, seterrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");

  // usercontext for userid
  const { setUserID, userID } = useContext(User_context)


  // function to check userid and password
  const caller = async () => {


  
    // axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

    console.log(input.email)
    console.log(input.password)


    let user_name = input.email
    let pass_word = input.password
 
    
    axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
    const res = await axios.get("http://127.0.0.1:8000/login?username=" + user_name +"&password="+ pass_word);
    
    console.log(res.data)
    // let User_ID = res.data.id
    console.log(res.data.id)
    console.log(userID)
    setUserID(res.data.id)
    console.log(userID)
 
  }

  return (
    <div className="text-center m-5-auto">
      <h2>Sign in to us</h2>

      <p>
        <label>Username or email address</label><br />
        <input type="text" name="email" onChange={handleChange} required />
      </p>
      <p>
        <label>Password</label>
        {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link> */}
        <br />
        <input type="password" name="password" onChange={handleChange} required />
      </p>
      <p>
        <button id="sub_btn" type="submit" onClick={(e) => {
          e.preventDefault()
          caller()
        }
        }>Login</button>
      </p>
      <footer>
        <p>First time? <Link to="/register">Create an account</Link>.</p>
        <p><Link to="/home">Back to Homepage</Link>.</p>
      </footer>
    </div>
  )
}
