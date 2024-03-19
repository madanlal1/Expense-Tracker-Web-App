import React from "react";
import LeftNavbar from "../components/dashboard/LeftNavbar";
import TopNavbar from "../components/dashboard/TopNavbar";
import CreateTransaction from "../components/transaction/CreateTransaction";

const Transaction = () => {
  return (
    <>
      <div className="row dashboardParentContainer g-0">
        <div className="col-3 dashboardLeftContainer">
          <LeftNavbar />
        </div>
        <div className="col-9 dashboardRightContainer">
          <TopNavbar />
          <CreateTransaction />
        </div>
      </div>
    </>
  );
};

export default Transaction;
