import React from "react";
import styled from "styled-components";

const ContentContainer = ({ children }) => {
    return (
        <Content>{ children }</Content>
    )
};

const Content = styled.div`
    position: absolute;
    width: -webkit-fill-available;
    padding: 1.5rem 1rem 2.5rem;
    margin-top: -1.875rem;
    border-radius: 1.25rem;
    background-color: var(--white);
    box-shadow: 0px 4px 24px rgb(105 119 168 / 10%);
    z-index:9;
    animation: container-show 3s;
`;

export default ContentContainer;