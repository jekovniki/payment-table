import React from "react";
import styled from "styled-components";

import Table from "../../components/Table";
import SearchArea from "../../components/SearchArea";
import tableLabel from "../../data/tableLabels.json";
import tableData from "../../data/data.json";
import { formatPaymentTableData } from "../../utils/helpers";

const TablePage = () => {
    const tableCopy = JSON.parse(JSON.stringify(tableData));
    const searchFilterData = JSON.parse(JSON.stringify(tableLabel));
    delete searchFilterData.created_at;
    const transactions = tableCopy.payment_transactions.map((transaction) => {
        return formatPaymentTableData(transaction);
    });
    
    return (
        <TableContainer>
            <SearchArea data={searchFilterData} />
            <Table labels={tableLabel} data={transactions} />
        </TableContainer>
    )
}

const TableContainer = styled.div`
    overflow: auto;
`;


export default TablePage;