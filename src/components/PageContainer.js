import React from "react";
import styled from "styled-components";

const PageContainer = ({ children }) => {

    return (
        <Container>
            { children }
        </Container>
    )

}

const Container = styled.div`
    position: relative;
    margin: 0 1rem;
    @media only screen and (min-width: 767px) {
        max-width:700px;
        width: 100%;
        margin: 0 auto;
    }
    @media only screen and (min-width: 1020px) {
        max-width:920px;
    }
    @media only screen and (min-width: 1400px) {
        max-width: 1320px;
    }
`;

export default PageContainer;