import { Link } from "gatsby";
import styled from "styled-components";
import { devices } from "./devices";

export const Button = styled.button`
    display: block;
    border: none;
    background-color: inherit;
    color: inherit;
    padding: 12px 24px;
    font-weight: 700;
    border-radius: 9999px;
    cursor: pointer;
`;

export const SmallButton = styled(Button)`
    padding: 6px 18px;
    border: inherit;
    background-color: transparent;
    transition: background-color ease 0.2s;

    &:hover,
    &:focus {
        background-color: rgba(56, 53, 53, 0.6);
    }
`;

export const PageBlock = styled.div`
    display: block;
`;

export const PageText = styled.div`
    display: block;
    text-align: left;
`;

export const PageTextMT24 = styled(PageText)`
    margin-top: 24px;
`;

export const PageTextMB24 = styled(PageText)`
    margin-bottom: 24px;
`;

export const PageTextMT48 = styled(PageText)`
    margin-top: 48px;
`;

export const PageTextMB48 = styled(PageText)`
    margin-bottom: 48px;
`;

export const SvgIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    fill: inherit;
    stroke: inherit;

    svg {
        width: inherit;
        height: inherit;
        fill: inherit;
        stroke: inherit;
    }
`;

export const Status = styled.div`
    display: block;
    padding: 6px;
    border-radius: 6px;
    font-size: 14px;
    background-color: #039be5;
    color: #ffffff;
    margin-bottom: 24px;
`;

export const LinkButton = styled(Link)`
    display: inline-block;
    padding: 12px 24px;
    border-radius: 9999px;
    text-decoration: none;
    background-color: inherit;
    color: inherit;
    font-weight: 700;

    &:hover,
    &:active {
        text-decoration: none;
    }
`;
