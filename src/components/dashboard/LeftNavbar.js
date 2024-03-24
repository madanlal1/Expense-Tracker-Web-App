import React from "react";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/dashboard">
            <img src={logo} alt="logo" width="40%" />
          </NavLink>
        </div>
        <hr />
        <div className="LeftNavbarNavLinks">
          <ul>
            <li>
              <FontAwesomeIcon icon={faMoneyBillTransfer} />
              <NavLink to="/transaction">Transactions</NavLink>
            </li>
            <li>
              <FontAwesomeIcon icon={faMoneyCheckDollar} />
              <NavLink to="/payment">Payments</NavLink>
            </li>
            <li>
              <FontAwesomeIcon icon={faCreditCard} />
              <NavLink to="/card">Cards</NavLink>
            </li>
          </ul>
        </div>
        <div className="LeftNavbarFooter">
          <ul>
            <li>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <NavLink to="/" onClick={handleLogout}>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;
