import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const handleClick = async () => {
    try {
      const response = await fetch(
        "https://expense-tracker-task-production.up.railway.app/transaction/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": "<calculated when request is sent>",
            Host: "<calculated when request is sent>",
            "User-Agent": "PostmanRuntime/7.37.0",
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJkMWI5YTczNDAwYTBhNmVkZTI0ZDkiLCJpYXQiOjE3MTA4NDQyNjl9.R1Xtr3NzOEiW5PkIEC5u4HljT97dbJSCuuWZMyKkylA",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setTransactionData(data.data.data);
      } else {
        const errorMessage = await response.text();
        console.log(errorMessage);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  const renderPaginationLinks = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(transactionData.length / rowsPerPage); i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <a className="page-link" href="#" onClick={() => setCurrentPage(i)}>
            {i}
          </a>
        </li>
      );
    }
    return pageNumbers;
  };

  const renderTableRows = () => {
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = transactionData.slice(indexOfFirstRow, indexOfLastRow);

    return currentRows.map((data, index) => (
      <tr key={index}>
        <th scope="row">{indexOfFirstRow + index + 1}</th>
        <td>{data.description}</td>
        <td>{data.date}</td>
        <td>{data.amount}</td>
        <td>Electricity bill</td>
        <td>{data.source}</td>
        <td id={data.type === "debit" ? "billDebit" : "billCredit"}>
          {data.type}
        </td>
        <td>
          <div className="dropdown">
            <a
              className="btn btn-sm dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ⋮
            </a>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#" id="edit">
                  Edit
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" id="delete">
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    ));
  };

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
          <select className="form-select" aria-label="Default select example">
            <option defaultValue>Date Range</option>
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
          <table className="table table-striped table-hover">
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
            <tbody>{renderTableRows()}</tbody>
          </table>
          <div className="DataTablePagination">
            <nav aria-label="...">
              <ul className="pagination">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Previous
                  </a>
                </li>
                {renderPaginationLinks()}
                <li
                  className={`page-item ${
                    currentPage ===
                    Math.ceil(transactionData.length / rowsPerPage)
                      ? "disabled"
                      : ""
                  }`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
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
