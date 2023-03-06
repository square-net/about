import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { devices } from "../styles/devices";
import { PageText } from "../styles/global";

const FooterContainer = styled.footer`
    display: flex;
    background-color: #383535;
    color: #B5ADAD;
    font-size: 14px;
    align-items: center;
    justify-content: center;
`;

const FooterInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 24px;
    padding-bottom: 24px;
    width: 100%;

    @media ${devices.laptopS} {
        padding-left: 48px;
        padding-right: 48px;
        padding-top: 48px;
        padding-bottom: 48px;
        gap: 48px;
    }

    @media ${devices.laptopL} {
        padding-left: 24px;
        padding-right: 24px;
        width: 1200px;
    }
`;

const FooterGrid = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto;
    column-gap: 18px;
    row-gap: 18px;
    width: 100%;

    @media (min-width: 620px) {
        grid-template-columns: auto auto auto auto;
        grid-template-rows: auto;
    }
`;

const FooterItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    text-rendering: optimizeLegibility;
`;

const FooterTitle = styled.div`
    display: block;
    font-weight: 700;
    font-size: 18px;
`;

const FooterItemContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    div a {
        color: #B5ADAD;
    }
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterInnerContainer>
                <FooterGrid>
                    <FooterItem>
                        <FooterTitle>Company</FooterTitle>
                        <FooterItemContent>
                            <PageText>
                                <Link to="/about-us" title="About the company" aria-label="About the company">About the company</Link>
                            </PageText>
                            <PageText>
                                <Link to="/careers" title="Careers" aria-label="Careers">Careers</Link>
                            </PageText>
                            <PageText>
                                <Link to="/brand-toolkit" title="Brand toolkit" aria-label="Brand toolkit">Brand toolkit</Link>
                            </PageText>
                        </FooterItemContent>
                    </FooterItem>
                    <FooterItem>
                        <FooterTitle>Help</FooterTitle>
                        <FooterItemContent>
                            <PageText>
                                <Link to="/help-center" title="Help Center" aria-label="Help Center">Help Center</Link>
                            </PageText>
                            <PageText>
                                <Link to="/contact-us" title="Contact us" aria-label="Contact us">Contact us</Link>
                            </PageText>
                        </FooterItemContent>
                    </FooterItem>
                    <FooterItem>
                        <FooterTitle>Platform</FooterTitle>
                        <FooterItemContent>
                            <PageText>
                                <Link to="/an-open-world" title="An open world" aria-label="An open world">An open world</Link>
                            </PageText>
                            <PageText>
                                <Link to="/security-and-privacy" title="Security and privacy" aria-label="Security and privacy">Security and privacy</Link>
                            </PageText>
                        </FooterItemContent>
                    </FooterItem>
                    <FooterItem>
                    <FooterTitle>Social</FooterTitle>
                        <FooterItemContent>
                            <PageText>
                                <a href="https://twitter.com/SquareNetworkEU" title="Square on Twitter" aria-label="Square on Twitter">Twitter</a>
                            </PageText>
                            <PageText>
                                <a href="https://www.linkedin.com/company/squarenetwork" title="Square on LinkedIn" aria-label="Square on LinkedIn">LinkedIn</a>
                            </PageText>
                        </FooterItemContent>
                    </FooterItem>
                </FooterGrid>
                <FooterItem>
                    &copy; {new Date().getFullYear()} Square Network
                </FooterItem>
            </FooterInnerContainer>
        </FooterContainer>
    );
}

export default Footer;
