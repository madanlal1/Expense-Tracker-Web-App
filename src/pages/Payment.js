import React from "react";
import LeftNavbar from "../components/dashboard/LeftNavbar";
import TopNavbar from "../components/dashboard/TopNavbar";
import CreatePayment from "../components/Payment/CreatePayment";

const Payment = () => {
  return (
    <>
      <div className="row dashboardParentContainer g-0">
        <div className="col-3 dashboardLeftContainer">
          <LeftNavbar />
        </div>
        <div className="col-9 dashboardRightContainer">
          <TopNavbar />
          <CreatePayment />
        </div>
      </div>
    </>
  );
};

export default Payment;
