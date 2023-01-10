import React from "react";
import styled from "styled-components";

import MainButton from "./MainButton";
import { Link } from "react-router-dom";

const Merchant = (merchantData) => {
    const data = merchantData.data;
    return(
        <MerchantColumns>
            <Title>{ data.merchant_name }</Title>
            <DataColumns>
                <DataRow>
                    <Label>ID</Label>
                    <Information>{ data.id }</Information>
                </DataRow>
                <DataRow>
                    <Label>Terminal name</Label>
                    <Information>{ data.terminal_name }</Information>
                </DataRow>
                <DataRow>
                    <Label>Card holder</Label>
                    <Information>{ data.card_holder }</Information>
                </DataRow>
                <DataRow>
                    <Label>Card number</Label>
                    <Information>{ data.card_number}</Information>
                </DataRow>
                <DataRow>
                    <Label>Amount</Label>
                    <Information>{ data.amount }</Information>
                </DataRow>
                <DataRow>
                    <Label>Unique Id</Label>
                    <Information>{ data.unique_id }</Information>
                </DataRow>
                <DataRow>
                    <Label>Type</Label>
                    <Information>{ data.type }</Information>
                </DataRow>
                <DataRow>
                    <Label>Status</Label>
                    <Information>{ data.status }</Information>
                </DataRow>
                <DataRow>
                    <Label>Error class</Label>
                    <Information>{ data.error_class }</Information>
                </DataRow>
                <DataRow>
                    <Label>Error message</Label>
                    <Information>{ data.error_message }</Information>
                </DataRow>
                <DataRow>
                    <Label>Created at</Label>
                    <Information>{ data.created_at }</Information>
                </DataRow>
            </DataColumns>
            <MainButton>
                <Link to="/">
                    Back
                </Link>
            </MainButton>
        </MerchantColumns>
    );
}

const MerchantColumns = styled.article`
    padding: 0 3rem;
`;

const DataColumns = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    @media only screen and (min-width:1020px) {
        width:50%;
        margin-left: auto;
        margin-right: auto;
    }
`;

const DataRow = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
`;

const Label = styled.h3``;

const Information = styled.p``;

const Title = styled.h2`
    text-align: center;
`;

export default Merchant;