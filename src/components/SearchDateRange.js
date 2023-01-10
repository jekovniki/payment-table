import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';

import SearchAreaButton from "./SearchAreaButton";
import SearchAreaInput from "./SearchAreaInput";
import { setTableData } from "../actions";
import { formatDateForSorting } from "../utils/helpers";


const DateRange = () => {
    const dataFilter = useSelector(state => state.dataFilter);
    const [tableState, setTableState] = useState(dataFilter);
    const [isFromActive, setIsFromActive] = useState(false);
    const [isToActive, setIsToActive] = useState(false);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [isInputActive, setIsInputActive] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const handleClick = (event) => {
        switch(event.target.innerText) {
            case "From":
                setInputValue("");
                setIsFromActive(true);
                setIsToActive(false);
                setIsInputActive(true);
                break;
            case "To":
                setInputValue("");
                setIsFromActive(false);
                setIsToActive(true);
                setIsInputActive(true);
                break;
            default:
                setIsInputActive(false);
                setFromDate("");
                setToDate("");
                setInputValue("");
        }
    }

    const handleSubmit = () => {
        if (isFromActive) {
            setFromDate(inputValue);
            
            const setDate = new Date(formatDateForSorting(inputValue)).getTime();
            const res = [...dataFilter].filter(payment => {
                const currentDate = new Date().getTime();
                const time = new Date(payment.original_created_at).getTime();
                
                return (setDate < time && time < currentDate);
            });

            dispatch(setTableData(res));
        }
        if (isToActive) {
            setToDate(inputValue);

            const fromDateTime = new Date(formatDateForSorting(fromDate)).getTime();
            const toDateTime = new Date(formatDateForSorting(inputValue)).getTime();
            const res = [...dataFilter].filter(payment => {
                const time = new Date(payment.original_created_at).getTime();
                return (fromDateTime < time && time < toDateTime);
            });

            dispatch(setTableData(res));
        }
    }

    return (
        <Container>
            <Title>Search by date</Title>
            <DateRangeContainer>
                <SearchAreaButton onClick={handleClick}>From</SearchAreaButton>
                <SearchAreaButton onClick={handleClick}>To</SearchAreaButton>
                <SearchAreaInput onChange={(event) => {setInputValue(event.target.value)}} disabled={isInputActive === false} placeholder="Date" />
                <SearchAreaButton onClick={handleSubmit}>Submit</SearchAreaButton>
                <SearchAreaButton onClick={() => {dispatch(setTableData(tableState))}}>Reset</SearchAreaButton>
            </DateRangeContainer>
        </Container>
    )
}

const DateRangeContainer = styled.div`
    width: fit-content;
    border: 1px solid var(--main-bg);
    border-radius: 20px;
    > input {
        &:disabled {
            background-color:#999;
        }
    }
    > button:nth-last-child(2) {
        width: 100%;
    }
    > button:last-child {
        width:100%;
        background-color: #FFCCCB;
        border: 1px solid var(--red-btn);
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