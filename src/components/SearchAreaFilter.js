import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';

import { addSearchFilter } from "../actions";
import SearchAreaButton from "./SearchAreaButton";
import Dropdown from "./Dropdown";
import Filter from "./Filter";
import { convertToUnderscore } from "../utils/helpers";

let i = 1;

const SearchAreaFilter = (data) => {
    const dispatch = useDispatch();
    const filterValue = useSelector(state => state.searchFilter);
    const [filterElement, setFilterElement] = useState([]);
    const addFilter = () => {
        setFilterElement(filterElement.concat(<Filter key={i} type={filterValue} />));

        i++;
    }
    
    return(
        <SearchAreaFilterContainer>
            <Title>Search filter</Title>
            <SearchAreaFilterSection>
                <Dropdown options={data} onChange={(event) => {
                    dispatch(addSearchFilter(convertToUnderscore(event.target.value.toLowerCase())))}} />
                <SearchAreaButton onClick={addFilter}>Add filter +</SearchAreaButton>
            </SearchAreaFilterSection>
            <ActiveFiltersContainer>
                { filterElement }
            </ActiveFiltersContainer>
        </SearchAreaFilterContainer>
    )
}

const Title = styled.h3`
    margin-bottom: 0.5rem;
`

const SearchAreaFilterContainer = styled.div`
    width: 100%;
    margin: 0 0 10px 10px;
`;

const SearchAreaFilterSection = styled.div`
    display: flex;
    border-radius: 20px;
    border: 1px solid var(--main-bg);
    margin-bottom: 10px;
`;

const ActiveFiltersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    > div {
        margin: 0 .5rem .5rem 0;
    }
`;

export default SearchAreaFilter;