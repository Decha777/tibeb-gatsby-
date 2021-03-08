module.exports = {
  siteMetadata: {
    title: "Tibeb-Technologies",
    description: "This is Tibeb-technologies offcial website",
    author: "@Tibeb-technologies",
    image: "logo.png",
    // siteUrl: "https://testing.netlify.app",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: { extensions: [`.mdx`, `.md`] }
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        // apiURL: process.env.DEPLOY_URL
        //   ? `https://decha77-api.herokuapp.com`
        //   : `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`blogs`],
        singleTypes: [`about`],
      }
    },
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
        name: "constants",
        path: "./src/constants/",
      },
      __key: "constants",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ]
};
