import styled from "styled-components";

const SearchAreaButton = ({ children, onClick = () => {} }) => {
    return(
        <Button onClick={onClick}>
            { children }
        </Button>
    )
}

const Button = styled.button`
    background-color: var(--main-bg);
    border: 1px solid var(--light-purple);
    color: var(--white);
    border-radius: 20px;
    transition: 0.4s;
    padding: 0.8rem 1.74rem;
    &:hover {
        cursor: pointer;
        background-color: var(--light-purple);
        transition: 0.4s;
    }
    > a{
        padding: 0.49rem;
        text-decoration: none;
        color: var(--white);
        font-size: 1.2rem;
    }
`

export default SearchAreaButton;