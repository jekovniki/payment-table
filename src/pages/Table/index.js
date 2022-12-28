import React from "react";
import styled from "styled-components";

import Table from "../../components/Table";
import tableLabel from "../../data/tableLabels.json";
import data from "../../data/data.json";

const TablePage = () => {
    return (
        <TableContainer>
            <Table labels={tableLabel} data={data} />
        </TableContainer>
    )
}

const TableContainer = styled.div``;


export default TablePage;