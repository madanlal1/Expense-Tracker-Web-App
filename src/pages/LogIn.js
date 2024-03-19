import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    if (email === "madan@win.com" && password === "123") {
      localStorage.setItem("token", "madan123");
      navigate("/dashboard");
    } else {
      alert("Email or Password is wrong!");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    let myPass = document.getElementById("password");
    showPassword ? (myPass.type = "password") : (myPass.type = "text");
  };

  return (
    <div className="row LoginParentContainer g-0">
      <div className="col leftContainer">
        <div className="leftInnerContainer">
          <h3 id="logIn">LOG IN</h3>
          <input
            type="text"
            className="form-control"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span id="credentials">madan@win.com</span>
          <br />
          <br />

          <div className="input-group">
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="toggleBtn" onClick={togglePasswordVisibility}>
              {showPassword ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </span>
          </div>
          <span id="credentials">123</span>
          <br />
          <br />
          <div className="LoginButton">
            <button
              className="btn btn-success form-control loginBtn"
              onClick={handleClick}
            >
              LOG IN
            </button>
          </div>
        </div>
      </div>
      <div className="col rightContainer">
        <div className="rightInnerContainer">
          <img src={logo} alt="logo" width="35%" />
          <h3>Welcome back to win</h3>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
