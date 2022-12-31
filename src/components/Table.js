import React from "react";
import styled from "styled-components";

const Table = (tableData) => {
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
    const data = tableData.data;

    return (
        <TableContainer>
            <Header>
                <Row>
                    <Label>{ id }</Label>
                    <Label>{ merchant_name }</Label>
                    <Label>{ terminal_name }</Label>
                    <Label>{ card_holder }</Label>
                    <Label>{ card_number }</Label>
                    <Label>{ amount }</Label>
                    <Label>{ unique_id }</Label>
                    <Label>{ type }</Label>
                    <Label>{ status }</Label>
                    <Label>{ error_class }</Label>
                    <Label>{ created_at }</Label>
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
`;
const Column = styled.td`
    padding: 1.5rem 1rem;
    text-align: center;
    border-bottom: 1px solid var(--table-border);
    color: ${ props => props.status ? props.error ? "red" : "green" : "black" };
    font-weight: ${ props => props.status ? "bolder" : "normal" };
`;

export default Table;