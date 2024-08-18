const InvestmentInput = () => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label for="initial-investment">INITIAL INVESTMENT</label>
          <input id="initial-investment" type="number" required></input>
        </p>
        <p>
          <label for="annual-investment">ANNUAL INVESTMENT</label>
          <input id="annual-investment" type="number" required></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label for="expected-return">EXPECTED RETURN(%)</label>
          <input id="expected-return" type="number" required></input>
        </p>
        <p>
          <label for="duration">DURATION</label>
          <input id="duration" type="number" required></input>
        </p>
      </div>
    </section>
  );
};

export default InvestmentInput;
