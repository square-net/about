import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { devices } from "../styles/devices";
import { Button, ControlContainer, PageText } from "../styles/global";
import Close from "./icons/Close";
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
    padding-left: 24px;
    padding-right: 24px;

    @media ${devices.laptopS} {
        padding-left: 48px;
        padding-right: 48px;
    }
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

    a:hover,
    a:active {
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
    gap: 16px;
    align-items: center;
    justify-content: flex-end;

    @media ${devices.laptopS} {
        gap: 24px;
    }
`;

const NavButton = styled(Button)`
    display: none;
    background-color: #039be5;
    color: #ffffff;

    @media (min-width: 450px) {
        display: block;
    }
`;

const NavContent = styled.nav.attrs(
    (props: { visible: boolean }) => props
)`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    left: unset;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 1000;
    background-color: #ffffff;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    height: 100vh;
    overflow: auto;
    box-shadow: none;
    animation: ${(props) => (props.visible ? `slideIn` : `slideOut`)} 0.2s;

    @media ${devices.mobileL} {
        width: 64%;
        box-shadow: 0px 0px 120px 0 rgb(20 23 26 / 16%);
    }
    
    @media ${devices.tablet} {
        position: unset;
        flex-direction: row;
        top: unset;
        left: unset;
        right: unset;
        bottom: unset;
        width: auto;
        height: auto;
        z-index: unset;
        background-color: transparent;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 0;
        overflow: hidden;
        align-items: center;
        justify-content: flex-end;
        box-shadow: none;
        animation: none;
    }

    @media ${devices.laptopS} {
        gap: 24px;
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
        }

        to {
            transform: translateX(0%);
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0%);
        }

        to {
            transform: translateX(100%);
        }
    }
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

    &:hover,
    &:focus,
    &.active {
        border-bottom: 2px solid #039be5;
    }
`;

const NavEntryContainer = styled.div`
    display: block;
`;

const NavDropDownMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
    top: unset;
    padding: 16px;
    border-radius: 0px;
    background-color: transparent;
    box-shadow: none;

    @media ${devices.tablet} {
        position: absolute;
        top: 92px;
        border-radius: 6px;
        background-color: #ffffff;
        box-shadow: 4px 8px 24px 0 rgb(20 23 26 / 16%);
    }
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
    display: block;

    @media ${devices.tablet} {
        display: none;
    }
`;

const MobileMenuHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    min-height: 100px;

    @media ${devices.tablet} {
        display: none;
    }
`;

const MenuTitle = styled.div`
    display: block;
    font-size: 22px;
    font-weight: 700;
`;

interface DropDownProps {
    title: string;
    children: JSX.Element;
    isOpen: boolean;
    toggleDropDown: () => void;
}

const DropDown: React.FC<DropDownProps> = ({ title, children, isOpen, toggleDropDown }) => {
    return (
        <NavEntryContainer>
            <NavEntryButton
                role="button"
                title={title}
                aria-label={title}
                onClick={toggleDropDown}
            >
                <PageText>{title}</PageText>
                <Down />
            </NavEntryButton>
            {isOpen && <NavDropDownMenu>{children}</NavDropDownMenu>}
        </NavEntryContainer>
    );
};

function Nav() {
    const [activeDropDown, setActiveDropDown] = React.useState<number | null>(null);
    const [menu, setMenu] = React.useState(false);
    const ref1 = React.useRef<HTMLDivElement>(null);
    const ref2 = React.useRef<HTMLDivElement>(null);
    const ref3 = React.useRef<HTMLDivElement>(null);
    const menuRef = React.useRef<HTMLDivElement>(null);
    const [visible, setVisible] = React.useState(true);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenu(true);
                setVisible(true);
            } else {
                setMenu(false);
                setVisible(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleDropDownClick = (index: number) => {
        setActiveDropDown(activeDropDown === index ? null : index);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (ref1.current && !ref1.current.contains(event.target as Node)) {
            setActiveDropDown(null);
        }
        
        if (ref2.current && !ref2.current.contains(event.target as Node)) {
            setActiveDropDown(null);
        }

        if (ref3.current && !ref3.current.contains(event.target as Node)) {
            setActiveDropDown(null);
        }

        if (menuRef.current && !menuRef.current.contains(event.target as Node) && (window.innerWidth < 768)) {
            setVisible(false);
            setTimeout(() => {
                setMenu(false);
            }, 200);
        }
    };

    React.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <NavContainer>
            <SiteBrand>
                <Link
                    to="/"
                    title="Square Homepage"
                    aria-label="Square Homepage"
                >
                    <Logo type="nav" />
                    <SiteTitle>Square</SiteTitle>
                </Link>
            </SiteBrand>
            <HeaderRightContent>
                <MenuButton>
                    <ControlContainer
                        role="button"
                        title="Open menu"
                        aria-label="Open menu"
                        onClick={() => {
                            setMenu(true);
                            setVisible(true);
                        }}
                    >
                        <Menu />
                    </ControlContainer>
                </MenuButton>
                {menu && (
                    <NavContent visible={visible} ref={menuRef}>
                        <MobileMenuHeader>
                            <MenuTitle>Menu</MenuTitle>
                            <ControlContainer
                                role="button"
                                title="Close menu"
                                aria-label="Close menu"
                                onClick={() => {
                                    setVisible(false);
                                    setTimeout(() => {
                                        setMenu(false);
                                    }, 200);
                                }}
                            >
                                <Close type="normal" />
                            </ControlContainer>
                        </MobileMenuHeader>
                        <div ref={ref1}>
                            <DropDown
                                title="Who we are"
                                isOpen={activeDropDown === 0}
                                toggleDropDown={() => handleDropDownClick(0)}
                                children={
                                    <>
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
                                    </>
                                }
                            />
                        </div>
                        <div ref={ref2}>
                            <DropDown
                                title="Our priorities"
                                isOpen={activeDropDown === 1}
                                toggleDropDown={() => handleDropDownClick(1)}
                                children={
                                    <>
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
                                    </>
                                }
                            />
                        </div>
                        <div ref={ref3}>
                            <DropDown
                                title="Resources"
                                isOpen={activeDropDown === 2}
                                toggleDropDown={() => handleDropDownClick(2)}
                                children={
                                    <>
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
                                    </>
                                }
                            />
                        </div>
                    </NavContent>
                )}
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
