import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import User_context from "./User_context";
import loginstyle from "./Login.css"

import axios from "axios"
import "../../App.css"

const Login = () => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  /* prompt messages */



  // Usestates definition
  const [input, setInput] = useState({ email: "", password: "" });
  const [errorMessage, seterrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");

  // usercontext for userid
  const { setUserID, userID } = useContext(User_context)




  useEffect(() => {
    console.log("Im from useffect")
    console.log(userID)
  }, [userID])

  // function to check userid and password
  const caller = async () => {


    console.log(input.email)
    console.log(input.password)


    let user_name = input.email
    let pass_word = input.password


    axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
    const res = await axios.get("http://127.0.0.1:8000/login?username=" + user_name + "&password=" + pass_word);

    console.log(res.data)
    // let User_ID = res.data.id
    console.log(res.data.id)
    // console.log(userID)

    setUserID(res.data.id)
    console.log(res.data.res)

    // To store data
    let u_id = localStorage.setItem('user__id', res.data.id);
    console.log("local storage userid")
    console.log(u_id);

    if (res.data.res == "pass") {
      navigate('/home')
    }
    else {

      console.log("invalid username password")

      alert('Login failed. Please check your username and password and try again.');
    }



  }
  return (
    <div className={loginstyle.login}>
      <form className="login_form">
        <h1 className="login_form_components">Login</h1>
        <input
          className="login_form_components"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
        // value={user.email}
        />
        <p className={loginstyle.error}></p>
        <input
          className="login_form_components"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        // value={user.password}
        />
        <p className={loginstyle.error}></p>

        <button className={loginstyle.button_common} login_form_components id="sub_btn" type="submit" onClick={(e) => {
          e.preventDefault()
          caller()
        }
        }>Login</button>
        <NavLink to="/register">Not yet registered? Register Now</NavLink>
      </form>

    </div>
  )
}

export default Login