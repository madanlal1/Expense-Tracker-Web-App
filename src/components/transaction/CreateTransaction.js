import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const CreateTransaction = () => {
  return (
    <div>
      <div className="row CreateTransactionParentContainer g-0">
        <div className="col headerTitle createTransactionTitle ">
          <h5>CREATE TRANSACTION</h5>
        </div>
      </div>
      <div className="DataTableParentContainer">
        <div className="row DataTableInnerContainer g-0">
          <div className="col createTransactionParentSecondContainer">
            <label>Type</label>
            <select
              class="form-select selectTransaction"
              aria-label="Default select example"
            >
              <option selected>Credit</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <label>Category</label>
            <select
              class="form-select selectTransaction"
              aria-label="Default select example"
            >
              <option selected>Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <label>Description</label>
            <select
              class="form-select selectTransaction"
              aria-label="Default select example"
            >
              <option selected>Description</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col createTransactionParentSecondContainer">
            <label>Source</label>
            <select
              class="form-select selectTransaction"
              aria-label="Default select example"
            >
              <option selected>12 h</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <label>Amount</label>
            <select
              class="form-select selectTransaction"
              aria-label="Default select example"
            >
              <option selected>Amount</option>
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

export default CreateTransaction;
