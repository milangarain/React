import { calculateInvestmentResults, formatter } from "../util/investment";
const InvestmentResult = ({ investmentInput }) => {
  console.log(investmentInput);
  let annualData = calculateInvestmentResults(investmentInput);
  console.log(annualData);
  let totalInvestment =
    annualData[0].valueEndOfYear -
    annualData[0].annualInvestment -
    annualData[0].interest;
  return (
    <table id="result">
      <thead>
        <tr>
          <th> Year</th>
          <th> Investment value</th>
          <th> Interest (Year)</th>
          <th> Total Interest</th>
          <th> Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data) => {
          totalInvestment += data.annualInvestment;
          let totalInterest = data.valueEndOfYear - totalInvestment;
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InvestmentResult;
