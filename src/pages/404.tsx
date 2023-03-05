import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { PageLayout } from "../components/PageLayout";
import { SEO } from "../components/Seo";

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <>
            <PageLayout children={<>404</>} />
        </>
    );
};

export default NotFoundPage;

export const Head: HeadFC = () => (
    <SEO title="404 - Page not found" description="This page doesn't exist." />
);
