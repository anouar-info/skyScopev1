import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { VscChevronDown } from "react-icons/vsc";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Navbar = () => {
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
            <a href="/#astronomy">
              Astronomy <VscChevronDown color="white" size={18} />
            </a>
          </p>
          <p>
            <a href="/#weather">Weather</a>
          </p>
          <p>
            <a href="/#skymap">Sky map</a>
          </p>
          <p>
            <a href="/#blog">Blog</a>
          </p>
        </div>
      </div>
      <div className="sign">
        <p onClick={handleSignInClick}>sign in</p>
        <button type="button" onClick={handleSignUpClick}>
          sign up
        </button>
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
              <p onClick={handleSignInClick}>sign in</p>
              <button type="button" onClick={handleSignUpClick}>
                sign up
              </button>
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
