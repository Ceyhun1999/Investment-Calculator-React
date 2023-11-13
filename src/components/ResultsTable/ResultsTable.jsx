import classes from "./ResultsTable.module.css";

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumSignificantDigits: 2,
});

const ResultsTable = ({ data, initialInvestment }) => {
    return (
        <table className={classes.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    const { year, yearlyInterest, savingsEndOfYear, yearlyContribution } = item;

                    return (
                        <tr key={index}>
                            <td>{year}</td>
                            <td>{formatter.format(savingsEndOfYear)}</td>
                            <td>{formatter.format(yearlyInterest)}</td>
                            <td>
                                {formatter.format(savingsEndOfYear - initialInvestment - yearlyContribution * year)}
                            </td>
                            <td>{formatter.format(initialInvestment + yearlyContribution * year)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default ResultsTable;
