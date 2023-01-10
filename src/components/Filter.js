import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';

import Dropdown from "./Dropdown";
import SearchAreaInput from "./SearchAreaInput";
import MainButton from "./MainButton";

const Filter = ({ type }) => {
    const dispatch = useDispatch();
    const dataFilter = useSelector(state => state.dataFilter);
    const dropdownData = {
        equal: "Equal",
        startsWith: "Starts with",
        endsWith: "Ends with",
        contains: "Contains"
    }
    const [filter, isFilterSet] = useState(false);
    const [sortCriteria, setSortCriteria] = useState(dropdownData.equal);
    const [value, setValue] = useState("");
    
    const setFilter = () => {
        if (filter === false) {
            isFilterSet(true);
        } else {
            isFilterSet(false);
        }
    }

    return(
        <FilterContainer>
            Match by
            <Container isSet={filter} >
                { type }
                <Dropdown 
                    options={dropdownData} 
                    onChange={(event) => setSortCriteria(event.target.value)}
                    isDisabled={filter}
                />
                { filter === false ? <SearchAreaInput onChange={(event) => setValue(event.target.value)} /> : value }
                <MainButton onClick={setFilter}>
                    {filter === false ? "Add" : "Remove" }
                </MainButton>
            </Container>
        </FilterContainer>
    )
}

const FilterContainer = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    border: 1px solid var(--main-bg);
    border-radius: 20px;
    padding-left: 0.8rem;
`;

const Container = styled.div`
    display: flex;
    border-radius: 20px;
    align-items: center;
    padding-left:0.5rem;

    input {
        border: none;
        border-radius: 0px;
        border-bottom: 1px solid var(--light-purple);
        display: ${props => props.isSet === true ? "none" : "block"};
    }
    > button {
        background-color: ${ props => props.isSet === false ? "#F7F9FD" : "#FFCCCB" };
        border-color: ${ props => props.isSet === false ? "#D9D8FF" : "#DC3545" };
        margin-left: .5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        &:hover {
            background-color: ${ props => props.isSet === false ? "#D9D8FF" : "#DC3545" };
        }
    }
`;

export default Filter;