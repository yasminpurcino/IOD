import {useState} from "react";

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const emailName = localStorage.getItem
    ('email');
    const [isLoggedin, setIsLoggedin] = useState(false);

    const logout = () => {
        localStorage.clear();
        setIsLoggedin(false);
      };

      
    return (
        <nav className="navigation">
            <a href="/" className="logo">
                SaveBlood
            </a>
            <button className="hamburger"
                onClick={
                    () => {
                        setIsNavExpanded(!isNavExpanded)
                    }
            }>
                {/* hamburger svg code... */} </button>
            <div className={
                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }>
                <ul>
                    <li> {
                        (emailName) ? <a className="navBtn" onClickCapture={logout} href="/">LOGOUT</a> : <a className="navBtn" href="/login">LOGIN</a>
                    } </li>
                    <li>
                        <a className="navBtn" href="/createAccount ">CREATE ACCOUNT</a>
                    </li>
                    <li>
                        <a className="navBtn" href="/beforeBook">BOOK NOW
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
