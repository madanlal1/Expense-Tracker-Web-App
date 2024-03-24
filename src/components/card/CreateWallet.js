import { useState } from "react";

const CreateWallet = () => {
  const [cash, setCash] = useState();
  const [amount, setAmount] = useState();
  const [saving, setSaving] = useState();

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://expense-tracker-task-production.up.railway.app/account/account-amount",
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
            accountAmount: Number(amount),
            savingAmount: saving,
            cashInHand: cash,
          }),
        }
      );

      if (response.ok) {
        alert("Congratulations Your Wallet has been created.");
      } else {
        const errorMessage = await response.text();
        console.log(
          "Error while posting data using CreateWallet : ",
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
          <h5>CREATE WALLET</h5>
        </div>
      </div>
      <div className="DataTableParentContainer">
        <div className="DataTableInnerContainer createWalletParentDiv g-0">
          <label>Cash</label>
          <select
            value={cash}
            onChange={(e) => setCash(e.target.value)}
            className="form-select selectTransaction"
            aria-label="Default select example"
          >
            <option defaultValue>20000</option>
            <option value="1">10000</option>
            <option value="2">1000</option>
            <option value="3">500</option>
          </select>

          <label>Amount</label>
          <select
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-select selectTransaction"
            aria-label="Default select example"
          >
            <option defaultValue>23000</option>
            <option value="1">15000</option>
            <option value="2">10000</option>
            <option value="3">1000</option>
          </select>

          <label>Savings</label>
          <select
            value={saving}
            onChange={(e) => setSaving(e.target.value)}
            className="form-select selectTransaction"
            aria-label="Default select example"
          >
            <option defaultValue>3000</option>
            <option value="1">2000</option>
            <option value="2">1000</option>
            <option value="3">500</option>
          </select>
          <div className="createBtnDiv">
            <button
              className="btn btn-primary form-control"
              onClick={handleSubmit}
              disabled
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWallet;
