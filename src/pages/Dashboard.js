import React from "react";
import LeftNavbar from "../components/dashboard/LeftNavbar";

const Dashboard = () => {
  return (
    <div className="row dashboardParentContainer g-0">
      <div className="col-3 dashboardLeftContainer">
        <LeftNavbar />
      </div>
      <div className="col-9 dashboardRightContainer">
        {/* Top Navbar */}
        {/* Header */}
        {/* Body */}
      </div>
    </div>
  );
};

export default Dashboard;
