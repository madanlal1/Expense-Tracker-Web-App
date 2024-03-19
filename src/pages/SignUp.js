import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const register = async () => {
    try {
      let pass1 = document.getElementById("password1").value;
      let pass2 = document.getElementById("password2").value;
      if (pass1 === pass2) {
        const response = await fetch(
          "https://expense-tracker-task-production.up.railway.app/user/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              email: email,
              password: password,
            }),
          }
        );
        console.log(response);

        if (response.ok) {
          navigate("/");
        } else {
          const errorMessage = await response.text();
          alert(`Error: ${errorMessage}`);
        }
      } else {
        alert("confirm password is not matching!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

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
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <div className="input-group">
            <input
              type="password"
              id="password1"
              className="form-control"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <button
              className="btn btn-success form-control loginBtn"
              onClick={register}
            >
              SIGN UP
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

export default SignUp;
