import * as React from "react";

interface PageLayoutProps {
    children: JSX.Element;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
}
