import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/index.css";
import "../styles/style.css";

const IndexPage: React.FC<PageProps> = () => {
    return <main>Square</main>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Square</title>;
