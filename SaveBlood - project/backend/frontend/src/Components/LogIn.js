import ReactDOM from "react-dom";
import Logo from './Logo.png'
import React, { useState } from "react";
import {Link} from "react-router-dom";

//errorMessages: Store an object with an error message and the name of the field.
//isSubmitted: boolean value to indicate if the form is successfully submitted or not.

function LogIn() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "yasmin",
      password: "test1"
    },
    {
      username: "ana",
      password: "test2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
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
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
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