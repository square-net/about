import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `about`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-styled-components",
        {
            resolve: "gatsby-plugin-google-gtag",
            options: {
                trackingId: "G-3481TT0T0L",
                cookieDomain: "projectsquare.online",
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "./src/images/icon.png",
                icons: [
                    {
                        src: "./src/images/favicon.ico",
                        sizes: "64x64 32x32 24x24 16x16",
                        type: "image/x-icon",
                    },
                ],
                name: "Square",
                short_name: "Square",
                start_url: "/",
                background_color: "#039BE5",
                theme_color: "#039BE5",
                display: "standalone",
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
    ],
};

export default config;
