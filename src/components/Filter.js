import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';

import Dropdown from "./Dropdown";
import SearchAreaInput from "./SearchAreaInput";
import MainButton from "./MainButton";
import content from "../data/content.json";
import { setTableData } from "../actions";

const Filter = ({ type }) => {
    const dispatch = useDispatch();
    const filterValue = useSelector(state => state.searchFilter);
    const dataFilter = useSelector(state => state.dataFilter);
    const [tableState, setTableState] = useState(dataFilter);
    const [filter, isFilterSet] = useState(false);
    const [sortCriteria, setSortCriteria] = useState(content.dropdown.data.equal);
    const [value, setValue] = useState("");

    const handleFilter = () => {
        switch (sortCriteria) {
            case content.dropdown.data.equal :
                const equalResult = dataFilter.filter(payment => payment[filterValue] == value);
                dispatch(setTableData(equalResult));
                break;
            case content.dropdown.data.startsWith:
                const startsWithResult = dataFilter.filter(payment => payment[filterValue].startsWith(value));
                dispatch(setTableData(startsWithResult));
                break;
            case content.dropdown.data.endsWith:
                const endsWithResult = dataFilter.filter(payment => payment[filterValue].endsWith(value));
                dispatch(setTableData(endsWithResult));
                break;
            case content.dropdown.data.contains:
                const containsResult = dataFilter.filter(payment => payment[filterValue].includes(value));
                dispatch(setTableData(containsResult));
                break;
            default:
                dispatch(setTableData(tableState));
        }
    }
    
    const setFilter = () => {
        if (filter === true) {
            dispatch(setTableData(tableState));
        } else {
            handleFilter();
        }
        isFilterSet(!filter);
    }

    return(
        <FilterContainer>
            Match by
            <Container isSet={filter} >
                { type }
                <Dropdown 
                    options={content.dropdown.data} 
                    onChange={(event) => {setSortCriteria(event.target.value)}}
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