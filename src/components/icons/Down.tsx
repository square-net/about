import * as React from "react";
import styled from "styled-components";
import { SvgIcon } from "../../styles/global";

const DownArrow = styled(SvgIcon)`
    width: 13px;
    height: 13px;
    stroke: #000000;
    fill: none;
`;

function Down() {
    return (
        <DownArrow>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2 7.1241L10.4636 17.2804C11.2631 18.2399 12.7369 18.2399 13.5364 17.2804L22 7.1241"
                    strokeWidth="2"
                    strokeLinecap="square"
                />
            </svg>
        </DownArrow>
    );
}

export default Down;
