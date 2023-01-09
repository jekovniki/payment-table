import React, { useState } from "react";
import styled from "styled-components";
import SearchAreaButton from "./SearchAreaButton";
import SearchAreaInput from "./SearchAreaInput";


const DateRange = () => {
    return (
        <Container>
            <Title>Search by date</Title>
            <DateRangeContainer>
                <SearchAreaButton>From</SearchAreaButton>
                <SearchAreaButton>To</SearchAreaButton>
                <SearchAreaInput placeholder="Date" />
            </DateRangeContainer>
        </Container>
    )
}

const DateRangeContainer = styled.div`
    width: fit-content;
    border: 1px solid var(--main-bg);
    border-radius: 20px;
    > input {
        margin-top:19px;
    }
`;

const Container = styled.div`
    width: fit-content;
`

const Title = styled.h3`
    text-align: center;
    margin-bottom:0.5rem;
`;

export default DateRange;