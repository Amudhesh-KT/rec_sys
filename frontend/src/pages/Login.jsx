import React from 'react';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Text,Modal,Button,Loading } from "@nextui-org/react";
import "../styles/Login.css"
// import home_analytics from "../../../assets/Home__analytics_pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faEnvelope, faEye, faWarning } from "@fortawesome/free-solid-svg-icons";


export const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
      fetchItems();
    }, []);
    const [visible, setVisible] = React.useState(false);
    const [items, setItems] = useState([]);
    const fetchItems = async () => {
      const data = await fetch(
        "http://127.0.0.1:8000/user"
      );
        // console.log(data)
      const items = await data.json();
      console.log(items);
      setItems(items);
    };
const [username, setusername] = useState("");
const [password, setpassword] = useState("");
const [authenticated, setauthenticated] = useState(
  localStorage.getItem(localStorage.getItem("authenticated") || false)
);
// const users = [{ username: "amudhesh", password: "12345" }];
const handleSubmit = (e) => {
  e.preventDefault();
  const account = items.map((user) => user.username === username);
  const account_pass = items.map((user) => user.password === password);
  console.log(account)
  if (account[0] === true && account_pass[0] === true) {
    localStorage.setItem("authenticated", true);
    console.log("success")
    navigate("/home");

  }
  else{
      console.log("nope")
      setVisible(true);
  }
}
const closeHandler = () => {
  setVisible(false);
  console.log("closed");
};
  return (
    <div class="parent">
    <div class="child1">
      <div class="centerelements">
        {/* <img src="/assets/Images/customerportallogo.png" alt="" class="plant-login-image"> */}
        {/* <h1 class="plant-cont1">Welcome to</h1>
        <h1 class="plant-cont">Digiverz</h1> */}
        <Text
            h1
            size={60}
            className="login_main_cont_hed"
            css={{
              textGradient: "45deg, $green600 10%, $blue600 90%",
            }}
            weight="bold"
          >
            Welcome to Digiverz
          </Text>
          <h2 className='data_head'>DATA QUALITY REPORT</h2>
          <p className='data_tagline'>Provides a detailed report of the uploaded dataset</p>
        {/* <img className="login_main_img" src={home_analytics} alt="" /> */}
      </div>
    </div>
    <div class="child2">
      <div class="container">
        <div class="signup-container">
          <h1 class="heading-primary">Portal Logon</h1>
          <p class="text-mute">Enter your login credentials</p>
          <form class="signup-form" onSubmit={handleSubmit}>
            <label class="inp">
              <input type="text" name="username" class="input-text" id="" placeholder=" " onChange={(e) => setusername(e.target.value)}/>
              <span class="label">User ID</span>
              <span class="input-icon">
              <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </label>
            <label class="inp">
              <input type="password" name="password"  class="input-text" placeholder=" " id="pass" onChange={(e) => setpassword(e.target.value)} />
              <span class="label">Password</span>
              <span class="input-icon input-icon-password">
              <FontAwesomeIcon icon={faEye} />
              </span>
            </label>
            <button className="prediction-btn-login">Login</button>
          </form>
        </div>
      </div>
    </div>
    <Modal
          closeButton
          blur
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <FontAwesomeIcon className='popup__alert' icon={faWarning}/>
          <Modal.Header>
            
            <Text id="modal-title" size={18}>
              
              <Text b size={18}>
              Please Enter valid credentials
              </Text>
            </Text>
          </Modal.Header>
          
            
          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
              Close
            </Button>
            
          </Modal.Footer>
          <Loading color="error" type="points" />
        </Modal>
  </div>
  )
}
