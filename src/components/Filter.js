import styled from "styled-components";
import Dropdown from "./Dropdown";
import SearchAreaInput from "./SearchAreaInput";

const Filter = () => {
    const dropdownData = {
        equal: "Equal",
        startsWith: "Starts with",
        endsWith: "Ends with",
        contains: "Contains"
    }
    return(
        <FilterContainer>
            Match by
            <Container>
                <Dropdown options={dropdownData} />
                <SearchAreaInput />
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
    padding: 0 0.8rem;
`;

const Container = styled.div`
    display: flex;
    border-radius: 20px;

    input {
        border: none;
        border-radius: 0px;
        border-bottom: 1px solid var(--light-purple);
    }
`;

export default Filter;