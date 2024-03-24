import React from "react";
import profile from "../../assets/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const TopNavbar = () => {
  return (
    <div className="row TopNavbarParentContainer g-0">
      <div className="col-10">
        <div className="TopNavbarLeftContainer">
          <FontAwesomeIcon icon={faCircleQuestion} />
          &nbsp; &nbsp;
          <label>Help Center</label>
          &nbsp; &nbsp;
          <FontAwesomeIcon icon={faGear} />
        </div>
      </div>
      <div className="col-2">
        <div className="TopNavbarRightContainer  p-3">
          <a href="/dashboard">
            <img src={profile} alt="profileImage" width="40px" />
            Madan Lal
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
