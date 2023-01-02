import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';

import { orderTableAscending, orderTableDescending } from "../actions";

const Table = (tableData) => {
    const [data, setData] = useState(tableData.data);
    const tableOrder = useSelector(state => state.tableOrder);
    const dispatch = useDispatch();
    const sort = (column) => {
        if (tableOrder === true) {
            const sort = [...data].sort((firstElement, secondElement) => 
                firstElement[column].toLowerCase() > secondElement[column].toLowerCase() ? 1 : -1
            );
            setData(sort);
            dispatch(orderTableDescending());
        }
        if (tableOrder === false) {
            const sort = [...data].sort((firstElement, secondElement) => 
                firstElement[column].toLowerCase() > secondElement[column].toLowerCase() ? 1 : -1
            );
            setData(sort);
            dispatch(orderTableAscending());
        }
    }
    const { 
        id, 
        status, 
        created_at, 
        merchant_name, 
        terminal_name,
        type,
        error_class,
        card_holder,
        card_number,
        amount,
        unique_id
    } = tableData.labels;

    return (
        <TableContainer>
            <Header>
                <Row>
                    <Label>{ id }</Label>
                    <Label sortable onClick={() => sort("merchant_name")}>{ merchant_name }</Label>
                    <Label>{ terminal_name }</Label>
                    <Label sortable onClick={() => sort("card_holder")}>{ card_holder }</Label>
                    <Label sortable onClick={() => sort("card_number")}>{ card_number }</Label>
                    <Label sortable onClick={() => sort("amount")}>{ amount }</Label>
                    <Label>{ unique_id }</Label>
                    <Label sortable onClick={() => sort("type")}>{ type }</Label>
                    <Label sortable onClick={() => sort("status")}>{ status }</Label>
                    <Label sortable onClick={() => sort("error_class")}>{ error_class }</Label>
                    <Label sortable onClick={() => sort("created_at")}>{ created_at }</Label>
                </Row>
            </Header>
            <Body>{ data.map(column => (
                <Row key={ column.id }>
                    <Column>{ column.id }</Column>
                    <Column>{ column.merchant_name }</Column>
                    <Column>{ column.terminal_name }</Column>
                    <Column>{ column.card_holder }</Column>
                    <Column>{ column.card_number }</Column>
                    <Column>{ column.amount }</Column>
                    <Column>{ column.unique_id }</Column>
                    <Column>{ column.type }</Column>
                    <Column error={column.status === "error"} status>{ column.status }</Column>
                    <Column>{ column.error_class }</Column>
                    <Column>{ column.created_at }</Column>
                </Row>
            )) }</Body>
        </TableContainer>
    );
}

const TableContainer = styled.table`
    width: 100%;
    border-spacing: 0;
`;
const Header = styled.thead`
    background-color: var(--light-grey);
    border-bottom: 1px solid var(--table-border);
`;
const Body = styled.tbody``;
const Row = styled.tr`
    transition: .3s;
    &:hover {
        background-color: var(--table-border);
        transition: .3s;
        > td {
            border-bottom: 1px solid var(--light-purple);
        }
    }
`;
const Label = styled.th`
    padding: 1.5rem 1rem;
    transition: 0.3s;

    &:hover {
        cursor: ${ props => props.sortable ? "pointer" : "clicker"};
        color: ${ props => props.sortable ? "#D9D8FF" : "#212529"};
        transition: 0.3s;
    }
`;
const Column = styled.td`
    padding: 1.5rem 1rem;
    text-align: center;
    border-bottom: 1px solid var(--table-border);
    color: ${ props => props.status ? props.error ? "red" : "green" : "black" };
    font-weight: ${ props => props.status ? "bolder" : "normal" };
`;

export default Table;