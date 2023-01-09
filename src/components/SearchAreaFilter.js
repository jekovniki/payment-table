import styled from "styled-components";
import SearchAreaButton from "./SearchAreaButton";
import Dropdown from "./Dropdown";
import Filter from "./Filter";

const SearchAreaFilter = (data) => {
    return(
        <SearchAreaFilterContainer>
            <Title>Search filter</Title>
            <SearchAreaFilterSection>
                <Dropdown options={data} />
                <SearchAreaButton>Add filter +</SearchAreaButton>
            </SearchAreaFilterSection>
            <Filter />
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

export default SearchAreaFilter;