module.exports = {
  siteMetadata: {
    title: "nmaig-mvp",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-prettier-build`,
      options: {
        // default values
        types: ['html', 'css', 'js'],
        concurrency: 20,
        verbose: true
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
  ],
};
