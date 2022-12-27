import React from "react";
import styled from "styled-components";

import PageContainer from "../components/PageContainer";

const Main = ({ children }) => {
    return (
        <MainContainer>
            <PageContainer>
                { children }
            </PageContainer>
        </MainContainer>
    )
}

const MainContainer = styled.main``;

export default Main;