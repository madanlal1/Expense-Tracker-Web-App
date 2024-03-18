import React from "react";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillTransfer,
  faCreditCard,
  faMoneyCheckDollar,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const LeftNavbar = () => {
  return (
    <div className="LeftNavbarContainer">
      <div className="LeftNavbarInnerContainer">
        <div className="LeftNavbarHeader">
          <img src={logo} alt="logo" width="40%" />
        </div>
        <hr />
        <div className="LeftNavbarNavLinks">
          <ul>
            <li>
              <FontAwesomeIcon icon={faMoneyBillTransfer} />
              <a href="#">Transactions</a>
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
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;
