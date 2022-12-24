import React from "react";
import styled from "styled-components";
import money from "../assets/money.png";


const Header = ({ content }) => {

    return(
        <HeaderSection>
            <Title>{ content }</Title>
            <Background src={money} />
        </HeaderSection>
    );
}

const HeaderSection = styled.header`
    position: relative;
    color: var(--white);
    padding: 6rem 0;
    background-color: var(--main-bg);
    animation: slide-top 1s;
`;

const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    animation: quick-fade-up 2s;
`

const Background = styled.img`
    width: 100%;
    position: absolute;
    top:0;
    animation: image-fade-up 3s;
    @media only screen and (max-width:768px) {
        bottom: 0;
    }
`

export default Header;