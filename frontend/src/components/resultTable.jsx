import { formatCurrency } from "../utils";
const ResultTable = ({ data }) => {
    return (
        <div className='w-full'>
            <hr className='w-full' />
            <table className="table table-zebra">
                <tbody>
                    <tr>
                        <td>Gross Income</td>
                        <td>{formatCurrency(data.grossIncome)}</td>
                    </tr>
                    <tr>
                        <td>Gross Monthly Salary</td>
                        <td>{formatCurrency(data.grossIncome / 12)}</td>
                    </tr>
                    <tr>
                        <td>Net Income</td>
                        <td>{formatCurrency(data.netIncome)}</td>
                    </tr>
                    <tr>
                        <td>Net Monthly Salary</td>
                        <td>{formatCurrency(data.netIncome / 12)}</td>
                    </tr>
                    <tr>
                        <td>Annual Tax Paid</td>
                        <td>{formatCurrency(data.taxAmount)}</td>
                    </tr>
                    <tr>
                        <td>Monthly Tax Paid</td>
                        <td>{formatCurrency(data.taxAmount / 12)}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default ResultTable
