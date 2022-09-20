import Logo from './Logo.png'
import React, {useState} from 'react';

import {Link} from "react-router-dom";


function CreateAccount() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const handleInputChange = (e) => {
        const {id, value} = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }

    }

    const handleSubmit = () => {
        console.log(firstName, lastName, email, password, confirmPassword);
    }

    return (
        <div class="row img">
            <div className="imgLogo">
                <img src={Logo}
                    alt="logo"/>
            </div>

            <div className="title">
                Create Account:</div>

            <div className="form">
                <div className="form-body">
                    <div className="username">
                        <label className="form__label" for="firstName"></label>
                        <input className="form__input" type="text"
                            value={firstName}
                            onChange=
                            {(e) => handleInputChange(e)}
                            id="firstName"
                            placeholder="First Name"/>
                    </div>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName"></label>
                    <input type="text" name="" id="lastName"
                        value={lastName}
                        className="form__input"
                        onChange=
                        {(e) => handleInputChange(e)}
                        placeholder="Last Name"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email"></label>
                    <input type="email" id="email" className="form__input"
                        value={email}
                        onChange=
                        {(e) => handleInputChange(e)}
                        placeholder="E-mail"/>
                </div>

                <div className="password">
                    <label className="form__label" for="password"></label>
                    <input className="form__input" type="password" id="password"
                        value={password}
                        onChange=
                        {(e) => handleInputChange(e)}
                        placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword"></label>
                    <input className="form__input" type="password" id="confirmPassword"
                        value={confirmPassword}
                        onChange=
                        {(e) => handleInputChange(e)}
                        placeholder="Confirm Password"/>
                </div>
            </div>

            <div class="row">
                <div class="col create2">
                    <div className='createAccount2'>
                        <button onClick={
                                () => handleSubmit()
                            }
                            type="submit"
                            class="btn">Create Account</button>
                        <div className="fontCreate" href="/createaccount">
                            Already have an account? 
                            <b><Link className='linkPageEnd' to="/createaccount"> 
                            Log in here
                            </Link> </b>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CreateAccount
