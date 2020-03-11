module.exports = {
  siteMetadata: {
    title: `Arjan van Hugten`,
    description: `This is the blog of Arjan van Hugten`,
    author: `Arjan van Hugten`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arjan van Hugten blog`,
        short_name: `ArjanvanHugten`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
      },
    },
  ],
}
