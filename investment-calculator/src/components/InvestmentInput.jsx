const InvestmentInput = ({investmentInput, onChange}) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
          <input id="initial-investment" type="number" value={investmentInput.initialInvestment} onChange={(e) => onChange("initialInvestment", e.target.value)} required/>
        </p>
        <p>
          <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
          <input id="annual-investment" type="number" value={investmentInput.annualInvestment} onChange={(e) => onChange("annualInvestment", e.target.value)} required></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">EXPECTED RETURN(%)</label>
          <input id="expected-return" type="number" value={investmentInput.expectedReturn} onChange={(e) => onChange("expectedReturn", e.target.value)} required></input>
        </p>
        <p>
          <label htmlFor="duration">DURATION</label>
          <input id="duration" type="number" value={investmentInput.duration} onChange={(e) => onChange("duration", e.target.value)} required></input>
        </p>
      </div>
    </section>
  );
};

export default InvestmentInput;
