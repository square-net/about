import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/index.css";
import "../styles/style.css";
import { PageLayout } from "../components/PageLayout";
import { SEO } from "../components/Seo";
import styled from "styled-components";
import { devices } from "../styles/devices";
import { LinkButton, PageBlock, PageText, PageTitle } from "../styles/global";

const IndexPageContainer = styled.div`
    display: flex;
    flex-direction: column;
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
        width: 540px;
    }

    @media ${devices.laptopS} {
        padding-left: 48px;
        padding-right: 48px;
        gap: 48px;
        width: 760px;
    }

    @media ${devices.laptopM} {
        width: 940px;
    }

    @media ${devices.laptopL} {
        width: 1100px;
    }

    @media (max-height: 480px) {
        height: auto;
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

const MediaBlockContainer = styled.div`
    display: grid;
    position: relative;
    align-items: unset;
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 24px;
    padding-bottom: 24px;
    height: calc(100vh - 100px);

    @media (min-width: 600px) {
        align-items: center;
        grid-template-columns: 45% 55%;
        grid-template-rows: 100%;
    }

    @media ${devices.laptopS} {
        padding-left: 48px;
        padding-right: 48px;
    }

    @media (max-height: 480px) {
        height: auto;
    }
`;

const MediaBlockText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media ${devices.laptopS} {
        gap: 48px;
    }
`;

const MediaBlockContent = styled.div`
    display: block;
    width: 100%;
    height: 100%;
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
                    <MediaBlockContainer>
                        <MediaBlockText>
                            <PageTitle>
                                Do anything on Square.
                            </PageTitle>
                            <PageText>
                                On Square you can express your opinions, send messages to your friends and make videocalls. You can also send and receive money.
                            </PageText>
                        </MediaBlockText>
                        <MediaBlockContent>

                        </MediaBlockContent>
                    </MediaBlockContainer>
                    <MainBlockContainer>
                        <IndexTitle>
                            Work with us.
                        </IndexTitle>
                        <PageText>
                            Here, we will help you unleash your full potential as we try to unite the world and make things easier.
                        </PageText>
                        <PageBlock>
                            <IndexLinkButton
                                title="Careers"
                                to="/careers"
                                role="button"
                                aria-label="Careers"
                            >
                                Careers
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
