import tableData from "../data/data.json";
import { formatPaymentTableData } from "../utils/helpers";

const tableCopy = JSON.parse(JSON.stringify(tableData));
const transactions = tableCopy.payment_transactions.map((transaction) => {
    return formatPaymentTableData(transaction);
});

const dataFilterReducer = (state = transactions, action) => {
    const data = action?.payload && Array.isArray(action.payload) ? [...action.payload] : state;

    switch(action.type) {
        case 'Data':
            return [...data];
        case 'Order':
            return [...data];
        case 'Search':
            return [...data];
        default: 
            return state;
    }
}

export default dataFilterReducer;