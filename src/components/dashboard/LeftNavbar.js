import React from "react";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faMoneyBillTransfer,
  faCreditCard,
  faMoneyCheckDollar,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const LeftNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    // Redirect to the login page or any other desired route
    navigate("/");
  };

  return (
    <div className="LeftNavbarContainer">
      <div className="LeftNavbarInnerContainer">
        <div className="LeftNavbarHeader">
          <a href="/dashboard">
            <img src={logo} alt="logo" width="40%" />
          </a>
        </div>
        <hr />
        <div className="LeftNavbarNavLinks">
          <ul>
            <li>
              <FontAwesomeIcon icon={faMoneyBillTransfer} />
              <a href="/transaction">Transactions</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faMoneyCheckDollar} />{" "}
              <a href="#">Payments</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faCreditCard} />
              <a href="#">Cards</a>
            </li>
          </ul>
        </div>
        <div className="LeftNavbarFooter">
          <ul>
            <li>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <a href="/" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;
