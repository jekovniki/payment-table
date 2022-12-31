import React from "react";
import styled from "styled-components";

import money from "../assets/money.png";


const Header = ({ content }) => {

    return(
        <HeaderSection>
            <HeaderContainer>
                <Title>{ content }</Title>
                <Background src={money} />
            </HeaderContainer>
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

const HeaderContainer = styled.div`
    position: relative;
    margin: 0;
    @media only screen and (min-width: 1400px) {
        max-width: 1800px;
        margin: 0 auto;
    }
    @media only screen and (min-width: 1700px) {
        max-width: 2000px;
    }
`;

const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    animation: quick-fade-up 1.5s;
`

const Background = styled.img`
    position: absolute;
    width: 100%;
    position: absolute;
    top: -14rem;
    animation: image-fade-up 2.5s;
    z-index:1;
    @media only screen and (max-width:768px) {
        bottom: 0;
    }
    @media only screen and (min-width: 1400px) {
        top:
    }
`

export default Header;