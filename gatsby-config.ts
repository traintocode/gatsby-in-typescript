import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.traintocode.com`
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", "gatsby-transformer-csv", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "data",
      "path": "./src/data/"
    },
    __key: "data"
  }]
};

export default config;
