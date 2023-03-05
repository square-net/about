import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/index.css";
import "../styles/style.css";
import { PageLayout } from "../components/PageLayout";
import { SEO } from "../components/Seo";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <PageLayout children={<>Home</>} />
        </>
    );
};

export default IndexPage;

export const Head: HeadFC = () => (
    <SEO title="Square" description="Square homepage." />
);
