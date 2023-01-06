import React from "react";
import styled from "styled-components";

import Table from "../../components/Table";
import tableLabel from "../../data/tableLabels.json";
import tableData from "../../data/data.json";
import { formatPaymentTableData } from "../../utils/helpers";

const TablePage = () => {
    const tableCopy = JSON.parse(JSON.stringify(tableData));
    const transactions = tableCopy.payment_transactions.map((transaction) => {
        return formatPaymentTableData(transaction);
    });
    
    return (
        <TableContainer>
            <Table labels={tableLabel} data={transactions} />
        </TableContainer>
    )
}

const TableContainer = styled.div``;


export default TablePage;