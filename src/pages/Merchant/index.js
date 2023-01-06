import React from "react";
import { useParams } from "react-router-dom";

import tableLabel from "../../data/tableLabels.json";
import tableData from "../../data/data.json";
import { formatPaymentTableData } from "../../utils/helpers";
import Merchant from "../../components/Merchant";


const MerchantPage = () => {
    const transactions = tableData.payment_transactions;
    const { id } = useParams();
    let pageTransaction = transactions.find(payment => payment.id == id);
    pageTransaction = formatPaymentTableData(pageTransaction, false);
    
    return (
        <Merchant labels={tableLabel} data={pageTransaction} />
    )
}


export default MerchantPage;