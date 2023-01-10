import styled from "styled-components";
import DateRange from "./SearchDateRange";
import SearchAreaFilter from "./SearchAreaFilter";

const SearchArea = (data) => {
    return(
        <SearchContainer id="search">
            <DateRange />
            <SearchAreaFilter data={data.data} />
        </SearchContainer>
    )
}

const SearchContainer = styled.section`
    display: flex;
    margin-bottom: 2rem;
    > button {
        margin: 3rem 0 0 1rem;
    }
`

export default SearchArea;