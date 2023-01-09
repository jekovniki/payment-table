import styled from "styled-components";

const MainButton = ({ children, onClick=() => {} }) => {
    return(
        <Button onClick={onClick}>
            { children }
        </Button>
    )
}

const Button = styled.button`
    background-color: var(--main-btn);
    border: 1px solid var(--light-purple);
    border-radius: 20px;
    transition: 0.4s;
    padding: 0.8rem 0.4rem;
    &:hover {
        cursor: pointer;
        background-color: var(--light-purple);
        transition: 0.4s;
    }
    > a{
        padding: 0.49rem;
        text-decoration: none;
        color: var(--main-bg);
        font-size: 1.2rem;
    }
`

export default MainButton;