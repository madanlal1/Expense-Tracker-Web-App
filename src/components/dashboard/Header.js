import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className="row HeaderParentContainer g-0">
        <div className="col-2 headerTitle">
          <h5>TRANSACTION</h5>
        </div>
        <div className="col-5 searchBar">
          <FontAwesomeIcon id="searchIcon" icon={faMagnifyingGlass} />
          <input
            type="text"
            className="form-control searchBarInput"
            placeholder=" Search"
          />
        </div>
        <div className="col-2 dateRange">
          <select class="form-select" aria-label="Default select example">
            <option selected>Date Range</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-3 createTransaction">
          <button className="btn btn-success">Create Transaction</button>
        </div>
      </div>
      <div className="DataTableParentContainer">
        <div className="DataTableInnerContainer">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
                <th scope="col">Source</th>
                <th scope="col">Type</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Electricity bill has been payed</td>
                <td>06-Oct-2022</td>
                <td>20,000</td>
                <td>Electricity bill</td>
                <td>Savings</td>
                <td id="billCredit">Credit</td>
                <td>⋮</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Electricity bill has been payed</td>
                <td>06-Oct-2022</td>
                <td>20,000</td>
                <td>Electricity bill</td>
                <td>Savings</td>
                <td id="billDebit">Debit</td>
                <td>⋮</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Electricity bill has been payed</td>
                <td>06-Oct-2022</td>
                <td>20,000</td>
                <td>Electricity bill</td>
                <td>Savings</td>
                <td id="billCredit">Credit</td>
                <td>⋮</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Electricity bill has been payed</td>
                <td>06-Oct-2022</td>
                <td>20,000</td>
                <td>Electricity bill</td>
                <td>Savings</td>
                <td id="billCredit">Credit</td>
                <td>⋮</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Electricity bill has been payed</td>
                <td>06-Oct-2022</td>
                <td>20,000</td>
                <td>Electricity bill</td>
                <td>Savings</td>
                <td id="billCredit">Credit</td>
                <td>⋮</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Electricity bill has been payed</td>
                <td>06-Oct-2022</td>
                <td>20,000</td>
                <td>Electricity bill</td>
                <td>Savings</td>
                <td id="billCredit">Credit</td>
                <td>⋮</td>
              </tr>
            </tbody>
          </table>
          <div className="DataTablePagination">
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link">Previous</a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item" aria-current="page">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
