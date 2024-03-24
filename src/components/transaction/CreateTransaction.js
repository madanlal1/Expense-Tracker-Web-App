import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTransaction = () => {
  const [description, setDescription] = useState("Transaction description");
  const [amount, setAmount] = useState(4020);
  const [category, setCategory] = useState("Electricity bill");
  const [source, setSource] = useState("savings");
  const [type, setType] = useState("credit");

  const navigate = useNavigate();

  const dateString = "2024-01-26T14:30:00.000Z";
  let date = new Date(dateString);
  date = date.toString();
  const dateIndex = date.indexOf("(");
  date = date.slice(0, dateIndex);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://expense-tracker-task-production.up.railway.app/transaction/65bd1c3bc3e497073f55f399",
        {
          method: "POST",
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
          body: JSON.stringify({
            type: type,
            source: source,
            category: category,
            amount: Number(amount),
            description: description,
            date: date,
          }),
        }
      );

      if (response.ok) {
        navigate("/dashboard");
      } else {
        const errorMessage = await response.text();
        console.log(
          "Error while posting data using CreateTransaction : ",
          errorMessage
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

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
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="form-select selectTransaction"
              aria-label="Default select example"
            >
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>

            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-select selectTransaction"
              aria-label="Default select example"
            >
              <option value="Electricity bill">Electricity bill</option>
            </select>

            <label>Description</label>
            <select
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-select selectTransaction"
              aria-label="Default select example"
            >
              <option value="Transaction description">
                Transaction description
              </option>
              <option value="Any">Any</option>
            </select>
          </div>
          <div className="col createTransactionParentSecondContainer">
            <label>Source</label>
            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="form-select selectTransaction"
              aria-label="Default select example"
            >
              <option value="Saving">savings</option>
              <option value="Account">account</option>
              <option value="Cash">cash</option>
            </select>

            <label>Amount</label>
            <select
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="form-select selectTransaction"
              aria-label="Default select example"
            >
              <option value="4020">4020</option>
              <option value="400">400</option>
              <option value="20">20</option>
            </select>
            <div className="btnDiv">
              <button
                className="btn btn-outline-primary form-control"
                onClick={handleSubmit}
              >
                Create Transaction
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTransaction;
