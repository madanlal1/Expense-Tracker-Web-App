const CreatePayment = () => {
  return (
    <div>
      <div className="row CreateTransactionParentContainer g-0">
        <div className="col headerTitle createTransactionTitle ">
          <h5>CREATE PAYMENT</h5>
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
              <option value="1">Debit</option>
            </select>

            <label>Category</label>
            <select
              className="form-select selectTransaction"
              aria-label="Default select example"
            >
              <option defaultValue>Electricity Bills</option>
              <option value="1">Salary Income</option>
              <option value="2">Others</option>
            </select>
          </div>
          <div className="col createTransactionParentSecondContainer">
            <label>Source</label>
            <select
              className="form-select selectTransaction"
              aria-label="Default select example"
            >
              <option defaultValue>12 h</option>
              <option value="1">Amount</option>
              <option value="2">Cash</option>
              <option value="3">Saving</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePayment;
