import * as React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import styled from "styled-components";

interface PageLayoutProps {
    children: JSX.Element;
}

const MainComponent = styled.div`
    display: block;
    margin-top: 100px;
`;

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <>
            <Nav />
            <MainComponent>{children}</MainComponent>
            <Footer />
        </>
    );
}
