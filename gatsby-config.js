module.exports = {
  siteMetadata: {
    title: "Tibeb-Technologies",
    description: "This is Tibeb-technologies offcial website",
    author: "@Tibeb-technologies",
    image: "logo.png",
    siteUrl: "https://app.netlify.com/sites/practical-leavitt-6c277c/"
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
        apiURL: `https://tibeb-api.herokuapp.com`,
        queryLimit: 1000,
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
