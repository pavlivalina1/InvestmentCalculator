import {
  calculateInvestmentResults,
  formatter,
} from "../assets/util/investment";

export default function Results({ userInput }) {
  const result = calculateInvestmentResults(userInput);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((resultRow) => {
          const totalInterest =
            resultRow.valueEndOfYear -
            resultRow.annualInvestment * resultRow.year -
            initialInvestment;
          const investedCapital = resultRow.valueEndOfYear - totalInterest;
          return (
            <tr key={resultRow.year}>
              <td>{resultRow.year}</td>
              <td>{formatter.format(resultRow.valueEndOfYear)}</td>
              <td>{formatter.format(resultRow.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
