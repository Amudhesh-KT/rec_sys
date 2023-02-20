import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import User_context from "../components/User_context.jsx"

import axios from "axios"


export const Login = () => {
  const navigate = useNavigate();


  // Usestates definition
  const [input, setInput] = useState({ email: "", password: "" });
  const [errorMessage, seterrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");

  // usercontext for userid
  const { setUserID, userID } = useContext(User_context)
// function to check userid and password

// const checkUser = () => {
//   const usercheck = users.find(user => (user.username === input.email && user.password === input.password));
//   if (usercheck) {
//     console.log("Login successful");
//     caller()
//     // navigate('/dum')
//   } else {
//     console.log("Wrong password or username");
//   }
//   console.log(usercheck);
// }
const caller = async () => {
  const usernameUrl = "http://127.0.0.1:8000/login";


  //Clear the previous timeout.    
  // clearTimeout(timeout.current)
  let user_name = input.email
  let pass_word = input.password
  console.log("UserId and Password")
  console.log(user_name)
  console.log(pass_word)
  console.log("Calling API.....");

  // let res = {
  //   data: { username: "", password: "" }
  // }
  console.log("Start")
  await axios.post(usernameUrl, { username: user_name, password: pass_word }).then(async function (res) {
    console.log(res)
    console.log(res.data.UserID)
    setUserID(res.data.UserID)
    console.log(userID)
    // navigate('/dum')
    
    
  }).catch(function (err) {
    console.log(err)
  })
  
  console.log("End")
}
  return (
      <div className="text-center m-5-auto">
          <h2>Sign in to us</h2>
          
              <p>
                  <label>Username or email address</label><br/>
                  <input type="text" name="email" required />
              </p>
              <p>
                  <label>Password</label>
                  {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link> */}
                  <br/>
                  <input type="password" name="password" required />
              </p>
              <p>
                  <button id="sub_btn" type="submit" onSubmit={caller}>Login</button>
              </p>
          <footer>
              <p>First time? <Link to="/register">Create an account</Link>.</p>
              <p><Link to="/">Back to Homepage</Link>.</p>
          </footer>
      </div>
  )
}
