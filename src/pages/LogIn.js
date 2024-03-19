import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const response = await fetch(
        "https://expense-tracker-task-production.up.railway.app/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      console.log(response);

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        const errorMessage = await response.text();
        alert("email or password is not correct!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          <span id="credentials">user@gmail.com</span>
          <br />
          <br />

          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
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
          <span id="credentials">Password@123</span>
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
