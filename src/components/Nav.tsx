import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { Button, ControlContainer, PageText } from "../styles/global";
import Down from "./icons/Down";
import Logo from "./icons/Logo";
import Menu from "./icons/Menu";

const NavContainer = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: unset;
    height: 100px;
    background-color: #ffffff;
    align-items: center;
    justify-content: space-between;
    padding-left: 48px;
    padding-right: 48px;
`;

const SiteBrand = styled.div`
    display: block;

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;
        text-decoration: none;
    }

    a:hover, a:active {
        text-decoration: none;
    }
`;

const SiteTitle = styled.div`
    display: block;
    font-weight: 700;
    font-size: 24px;
    color: #000000;
`;

const HeaderRightContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: center;
    justify-content: flex-end;
`;

const NavButton = styled(Button)`
    background-color: #039be5;
    color: #ffffff;
`;

const NavContent = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: center;
    justify-content: flex-end;
`;

const NavEntryButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
    gap: 6px;
    padding-top: 4px;
    padding-bottom: 4px;
    transition: background-color ease 0.4s;
    color: #000000;
    cursor: pointer;
    border-bottom: 2px solid transparent;

    &:hover, &:focus, &.active {
        border-bottom: 2px solid #039be5;
    }    
`;

const NavEntryContainer = styled.div`
    display: block;
`;

const NavDropdownMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: absolute;
    top: 92px;
    padding: 16px;
    border-radius: 6px;
    background-color: #ffffff;
    box-shadow: 4px 8px 24px 0 rgb(20 23 26 / 16%);
`;

const NavEntry = styled.div`
    display: block;

    a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 6px;
        font-size: 16px;
        color: #000000;
    }

    a.current-page {
        text-decoration: underline;
    }
`;

const MenuButton = styled.div`
    display: none;
`;

function Nav() {
    return (
        <NavContainer>
            <SiteBrand>
                <Link to="/" title="Square Homepage" aria-label="Square Homepage">
                    <Logo type="nav" />
                    <SiteTitle>
                        Square
                    </SiteTitle>
                </Link>
            </SiteBrand>
            <HeaderRightContent>
                <MenuButton>
                    <ControlContainer>
                        <Menu />
                    </ControlContainer>
                </MenuButton>
                <NavContent>
                    <NavEntryContainer>
                        <NavEntryButton
                            role="button"
                            title="Who we are"
                            aria-label="Who we are"
                        >
                            <PageText>Who we are</PageText>
                            <Down />
                        </NavEntryButton>
                        <NavDropdownMenu>
                            <NavEntry>
                                <Link
                                    to="/about-us"
                                    activeClassName="current-page"
                                    title="About us"
                                    aria-label="About us"
                                >
                                    About us
                                </Link>
                            </NavEntry>
                            <NavEntry>
                                <Link
                                    to="/careers"
                                    activeClassName="current-page"
                                    title="Careers"
                                    aria-label="Careers"
                                >
                                    Careers
                                </Link>
                            </NavEntry>
                            <NavEntry>
                                <Link
                                    to="/brand-toolkit"
                                    activeClassName="current-page"
                                    title="Brand toolkit"
                                    aria-label="Brand toolkit"
                                >
                                    Brand toolkit
                                </Link>
                            </NavEntry>
                        </NavDropdownMenu> 
                    </NavEntryContainer>
                    <NavEntryContainer>
                        <NavEntryButton
                            role="button"
                            title="Our priorities"
                            aria-label="Our priorities"
                        >
                            <PageText>Our priorities</PageText>
                            <Down />
                        </NavEntryButton>
                        <NavDropdownMenu>
                            <NavEntry>
                                <Link
                                    to="/an-open-world"
                                    activeClassName="current-page"
                                    title="An open world"
                                    aria-label="An open world"
                                >
                                    An open world
                                </Link>
                            </NavEntry>
                            <NavEntry>
                                <Link
                                    to="/security-and-privacy"
                                    activeClassName="current-page"
                                    title="Security and privacy"
                                    aria-label="Security and privacy"
                                >
                                    Security and privacy
                                </Link>
                            </NavEntry>
                        </NavDropdownMenu>  
                    </NavEntryContainer>
                    <NavEntryContainer>
                        <NavEntryButton
                            role="button"
                            title="Resources"
                            aria-label="Resources"
                        >
                            <PageText>Resources</PageText>
                            <Down />
                        </NavEntryButton>
                        <NavDropdownMenu>
                            <NavEntry>
                                <Link
                                    to="/help-center"
                                    activeClassName="current-page"
                                    title="Help Center"
                                    aria-label="Help Center"
                                >
                                    Help Center
                                </Link>
                            </NavEntry>
                            <NavEntry>
                                <Link
                                    to="/contact-us"
                                    activeClassName="current-page"
                                    title="Contact us"
                                    aria-label="Contact us"
                                >
                                    Contact us
                                </Link>
                            </NavEntry>
                        </NavDropdownMenu>    
                    </NavEntryContainer>
                </NavContent>
                <NavButton
                    type="button"
                    title="Coming soon"
                    role="button"
                    aria-label="Coming soon"
                >
                    Coming soon
                </NavButton>
            </HeaderRightContent>
        </NavContainer>
    );
}

export default Nav;