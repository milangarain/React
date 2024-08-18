import { calculateInvestmentResults, formatter } from "../util/investment";
const InvestmentResult = ({investmentInput}) => {
	console.log(investmentInput)
	let annualData = calculateInvestmentResults(investmentInput);
	console.log(annualData)
	let totalInvestment = annualData[0].valueEndOfYear - annualData[0].annualInvestment - annualData[0].interest;
	return <table id="result">
		<thead>
			<th> Year</th>
			<th> Investment value</th>
			<th> Interest (Year)</th>
			<th> Total Interest</th>
			<th> Invested Capital</th>
		</thead>
		<tbody>
			{annualData.map(data => {
				totalInvestment += data.annualInvestment;
				let totalInterest = data.valueEndOfYear - totalInvestment;
				return (<tr>
					<td>{data.year}</td>
					<td>{formatter.format(data.valueEndOfYear)}</td>
					<td>{formatter.format(data.interest)}</td>
					<td>{formatter.format(totalInterest)}</td>
					<td>{formatter.format(totalInvestment)}</td>	
				</tr>)
			})}
			
		</tbody>
	</table>
}

export default InvestmentResult;