import React from "react";
import styled from "styled-components";

import PageContainer from "../components/PageContainer";
import ContentContainer from "../components/ContentContainer";

const Main = ({ children }) => {
    return (
        <MainContainer>
            <PageContainer>
                <ContentContainer>
                    { children }
                </ContentContainer>
            </PageContainer>
        </MainContainer>
    )
}

const MainContainer = styled.main`
    min-height:65vh;
`;


export default Main;