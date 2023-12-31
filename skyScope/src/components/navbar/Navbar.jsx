import React from "react";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { VscChevronDown } from "react-icons/vsc";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuthenticator } from '@aws-amplify/ui-react';
const Navbar = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleSignInClose = () => {
    setShowSignIn(false);
    setEmail("");
    setPassword("");
  };

  const handleSignUpClose = () => {
    setShowSignUp(false);
    setEmail("");
    setPassword("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignInSubmit = (event) => {
    event.preventDefault();
    console.log(`Sign in with email: ${email}, password: ${password}`);
    // Here you can add the logic to submit the sign-in form data to your backend API
    handleSignInClose();
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    console.log(`Sign up with email: ${email}, password: ${password}`);
    // Here you can add the logic to submit the sign-up form data to your backend API
    handleSignUpClose();
  };

  return (
    <div className="navbar">
      <div className="nav">
        <div className="logo">
          <a href="/#home">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="nav-items">
          <p>
            <a href="/#home">Home</a>
          </p>
          <p>
            <a href="/#astronomy" className="flex">
              Astronomy <VscChevronDown className="mt-1 ml-1" color="white" size={20} />
            </a>
          </p>
          <p>
            <Link to="weather/home">Weather</Link>
          </p>
          <p>
            <a href="/#skymap">Sky map</a>
          </p>
          <p>
            <a href="/#blog">blog</a>
          </p>
        </div>
      </div>
      <div className="sign">
      
       
        
        <button type="button" onClick={signOut}  className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium text-lg rounded-lg px-7 py-2.5 text-center mr-2 ">Sign out</button>

          
    
      </div>
      <div className="menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="menu-navbar scale-up-center">
            <div className="menu-nav">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#astronomy">Astronomy</a>
              </p>
              <p>
                <a href="#weather">Weather</a>
              </p>
              <p>
                <a href="#skymap">Sky map</a>
              </p>
              <p>
                <a href="#blog">Blog</a>
              </p>
            </div>
            <div className="menu-sign">
              <p><a href="signIn">sign in </a></p>
              <button type="button"  className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium text-lg rounded-lg px-7 py-2.5 text-center mr-2 "><a href="/signIn">signUp</a></button>
            </div>
          </div>
        )}
      </div>
      {showSignIn && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleSignInClose}>
              ×
            </span>
            <h2>Sign In</h2>
            <form onSubmit={handleSignInSubmit}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
      {showSignUp && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleSignUpClose}>
              ×
            </span>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUpSubmit}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
