import * as React from "react";

interface SeoProps {
    title: string;
    description: string;
    image?: string;
    isLarge?: boolean;
}

export const SEO: React.FC<SeoProps> = ({ title, description, image, isLarge }) => {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:card" content={isLarge ? "summary_large_image" : "summary"} />
            <meta
                property="og:image"
                content={image ? image : "https://cdn.projectsquare.online/brand/logo.png"}
            />
            <meta
                property="twitter:image"
                content={image ? image : "https://cdn.projectsquare.online/brand/logo.png"}
            />
        </>
    );
}