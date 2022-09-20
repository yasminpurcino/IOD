import Logo from './Logo.png'
import React, { useState } from "react";
import {Link} from "react-router-dom";
import getUser from '../Controller/User';
import { useNavigate } from "react-router-dom";

//errorMessages: Store an object with an error message and the name of the field.
//isSubmitted: boolean value to indicate if the form is successfully submitted or not.

function LogIn() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // User Login info - test
  // const database = [
  //   {
  //     email: "yasmin",
  //     password: "test1"
  //   },
  //   {
  //     email: "ana",
  //     password: "test2"
  //   }
  // ];

  const errors = {
    email: "invalid email",
    pass: "invalid password"
  };

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    // Find user login info
    let loginUser = await getUser (username, password)
    console.log(loginUser)
    if (loginUser) {navigate ("/main")}
    else {
      setErrorMessages({ name: "pass", message: errors.pass })
    } 
    // Compare user info
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "email", message: errors.email });
    // }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="formLogin">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>E-mail </label>
          <input onChange={(e) => setUsername(e.target.value)}
          type="text" email="email" required />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input onChange= {(e) => setPassword(e.target.value)}
          type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  return (
   <div>
    <div className="imgLogo">
      <img src={Logo} alt="logo" />
      </div>
      
      <div className="loginBox">
      <div className="login-form">
        <div className="titleLogin">Sign In:</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        
        
        <div className="fontLogin" href="/fontCreate"> Don’t have an account yet? 
        <b><Link className='linkPageEnd' to="/login">Sign up here!</Link></b>
       
        </div>
        </div>
      </div>
    </div>
 
    
  )
}

export default LogIn