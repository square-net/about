import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/index.css";
import "../styles/style.css";
import { PageLayout } from "../components/PageLayout";
import { SEO } from "../components/Seo";
import styled from "styled-components";
import { devices } from "../styles/devices";
import { LinkButton, PageBlock } from "../styles/global";

const IndexPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    align-items: center;
`;

const MainBlockContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 100px);
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 24px;
    padding-bottom: 24px;
    gap: 24px;

    @media ${devices.tablet} {
        width: 520px;
    }

    @media ${devices.laptopS} {
        padding-left: 48px;
        padding-right: 48px;
        gap: 48px;
        width: 720px;
    }

    @media ${devices.laptopM} {
        width: 900px;
    }

    @media ${devices.laptopL} {
        width: 1000px;
    }
`;

const IndexTitle = styled.div`
    display: block;
    font-weight: 800;
    font-size: 52px;

    @media ${devices.mobileL} {
        font-size: 72px;
    }
`;

const IndexLinkButton = styled(LinkButton)`
    background-color: #039be5;
    color: #ffffff;
`;

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <PageLayout children={
                <IndexPageContainer>
                    <MainBlockContainer>
                        <IndexTitle>
                            The everything app.
                        </IndexTitle>
                        <PageBlock>
                        <IndexLinkButton
                            title="Coming soon"
                            to="/"
                            role="button"
                            aria-label="Coming soon"
                        >
                            Coming soon
                        </IndexLinkButton>
                        </PageBlock>
                    </MainBlockContainer>
                </IndexPageContainer>
            } />
        </>
    );
};

export default IndexPage;

export const Head: HeadFC = () => (
    <SEO title="Square" description="Square homepage." />
);
