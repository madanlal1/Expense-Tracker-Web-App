import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const createPassword = () => {
    setShowCreatePassword(!showCreatePassword);
    let myPass = document.getElementById("password1");
    showCreatePassword ? (myPass.type = "password") : (myPass.type = "text");
  };

  const confirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
    let myPass = document.getElementById("password2");
    showConfirmPassword ? (myPass.type = "password") : (myPass.type = "text");
  };

  return (
    <div className="row LoginParentContainer g-0">
      <div className="col leftContainer">
        <div className="leftInnerContainer">
          <h3 id="logIn">SIGN UP</h3>
          <input type="text" className="form-control" placeholder="User Name" />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Email Address"
          />
          <br />
          <div className="input-group">
            <input
              type="password"
              id="password1"
              className="form-control"
              placeholder="Create Password"
            />
            <span className="toggleBtn" onClick={createPassword}>
              {showCreatePassword ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </span>
          </div>
          <br />
          <div className="input-group">
            <input
              type="password"
              id="password2"
              className="form-control"
              placeholder="Confirmed Password"
            />
            <span className="toggleBtn" onClick={confirmPassword}>
              {showConfirmPassword ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </span>
          </div>
          <br />
          <input type="checkbox" />
          &nbsp;
          <label>
            I accept the <a href="#">Terms and conditions</a>
          </label>
          <br />
          <div className="LoginButton">
            <button className="btn btn-success form-control loginBtn">
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

export default SignIn;
