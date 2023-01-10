import styled from "styled-components";

const SearchAreaInput = ({ placeholder, onChange=() => {}, disabled = false }) => {
    return(
        <InputField placeholder={ placeholder ?? ""} onChange={onChange} disabled={disabled} />
    )
}

const InputField = styled.input`
    height: 31px;
    margin: 1px;
    display: block;
    border-radius: 20px;
    border: 1px solid var(--main-bg);
    padding-left: 0.6rem;
`;

export default SearchAreaInput;