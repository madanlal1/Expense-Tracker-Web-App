import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const CreatePayment = () => {
  return (
    <div>
      <div className="row CreateTransactionParentContainer g-0">
        <div className="col headerTitle createTransactionTitle ">
          <h5>CREATE Payment</h5>
        </div>
      </div>
      <div className="DataTableParentContainer">
        <div className="row DataTableInnerContainer g-0">
          <div className="col createTransactionParentSecondContainer">
            <label>Type</label>
            <select
              className="form-select selectTransaction"
              aria-label="Default select example"
            >
              <option defaultValue>Credit</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <label>Category</label>
            <select
              className="form-select selectTransaction"
              aria-label="Default select example"
            >
              <option defaultValue>Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <label>Description</label>
            <select
              className="form-select selectTransaction"
              aria-label="Default select example"
            >
              <option defaultValue>Description</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col createTransactionParentSecondContainer">
            <label>Source</label>
            <select
              className="form-select selectTransaction"
              aria-label="Default select example"
            >
              <option defaultValue>12 h</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <label>Amount</label>
            <select
              className="form-select selectTransaction"
              aria-label="Default select example"
            >
              <option defaultValue>Amount</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePayment;
