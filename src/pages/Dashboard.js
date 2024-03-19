import React from "react";
import LeftNavbar from "../components/dashboard/LeftNavbar";
import TopNavbar from "../components/dashboard/TopNavbar";
import Header from "../components/dashboard/Header";

const Dashboard = () => {
  return (
    <div className="row dashboardParentContainer g-0">
      <div className="col-3 dashboardLeftContainer">
        <LeftNavbar />
      </div>
      <div className="col-9 dashboardRightContainer">
        <TopNavbar />
        <Header />
      </div>
    </div>
  );
};

export default Dashboard;
