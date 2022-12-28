import React from "react";
import styled from "styled-components";

const Table = (labels, data) => {
    const { 
        id, 
        status, 
        created_at, 
        merchant_name, 
        terminal_name,
        type,
        error_class,
        error_message,
        card_holder,
        card_number,
        amount,
        currency,
        unique_id
    } = labels;

    const transactions = data.payment_transactions;
    return (
        <TableContainer>
            <Header>
                <Row>
                    <Label>{ id }</Label>
                    <Label>{ status }</Label>
                    <Label>{ created_at }</Label>
                    <Label>{ merchant_name }</Label>
                    <Label>{ terminal_name }</Label>
                    <Label>{ type }</Label>
                    <Label>{ error_class }</Label>
                    <Label>{ error_message }</Label>
                    <Label>{ card_holder }</Label>
                    <Label>{ card_number }</Label>
                    <Label>{ amount }</Label>
                    <Label>{ currency }</Label>
                    <Label>{ unique_id }</Label>
                </Row>
            </Header>
            {/* <Body>{ transactions.map( data => (
                <Row key={ data.id }>
                    <Data>{ data.status }</Data>
                    <Data>{ data.created_at }</Data>
                    <Data>{ data.merchant_name }</Data>
                    <Data>{ data.terminal_name }</Data>
                    <Data>{ data.type }</Data>
                    <Data>{ data.error_class }</Data>
                    <Data>{ data.error_message }</Data>
                    <Data>{ data.card_holder }</Data>
                    <Data>{ data.card_number }</Data>
                    <Data>{ data.amount }</Data>
                    <Data>{ data.currency }</Data>
                    <Data>{ data.unique_id }</Data>
                </Row>
            )) }</Body> */}
        </TableContainer>
    );
}

const TableContainer = styled.table``;
const Header = styled.thead``;
const Body = styled.tbody``;
const Row = styled.tr``;
const Label = styled.th``;
const Data = styled.td``;

export default Table;