import React from "react";
import styled from "styled-components";

import footer from "../assets/footer.png";
import PageContainer from "../components/PageContainer";


const Footer = ({ name, description }) => {

    return(
        <FooterSection>
            <PageContainer>
                <Title>{ name }</Title>
                <Description>{ description }</Description>
                <Background src={footer}/>
            </PageContainer>
        </FooterSection>
    );
}

const FooterSection = styled.footer`
    background-color: var(--footer-bg);
    border-top: 1px solid var(--light-purple);
    padding-bottom: 4rem;
`;

const Background = styled.img`
    width: 100%;
`;

const Title = styled.h2`
    color: var(--content-color);
    text-transform: uppercase;
`;

const Description = styled.p``;

export default Footer;