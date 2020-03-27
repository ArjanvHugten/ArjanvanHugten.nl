
const queries = require("./src/utils/algolia")
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Arjan van Hugten`,
    description: `Software development blogs by Arjan van Hugten.`,
    author: `Arjan van Hugten`,
    siteUrl: `https://arjanvanhugten.nl`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          path: `${__dirname}/static/images`,
          name: 'images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/blogs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cms`,
        path: `${__dirname}/static`,
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
        background_color: `#ffffff`,
        theme_color: `#3298dc`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    { 
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-148913753-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
              'gatsby-remark-relative-images',
              {
                  resolve: `gatsby-remark-images`,
                  options: {
                    maxWidth: 700,
                  },
              },
              {
                resolve: `gatsby-remark-prismjs`,
                options: {
                  classPrefix: "language-",
                  inlineCodeMarker: null,
                  showLineNumbers: false,
                  noInlineHighlight: false,
                },
              },
          ],
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `Home`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://arjanvanhugten.nl',
        sitemap: 'https://arjanvanhugten.nl/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
      },
    },
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve:`gatsby-plugin-netlify`,
      options: {
        headers: {
          "/public/**/*.html": [
            "cache-control: public",
            "cache-control: max-age=0", 
            "cache-control: must-revalidate"
          ],
          "/*.js": [
            "cache-control: public", 
            "cache-control: max-age=31536000", 
            "cache-control: immutable"
          ],
          "/*.css": [
            "cache-control: public", 
            "cache-control: max-age=31536000", 
            "cache-control: immutable"
          ],
          "/sw.js": [
            "cache-control: public",
            "cache-control: max-age=0", 
            "cache-control: must-revalidate"
          ],
          "/public/page-data/*": [
            "cache-control: public",
            "cache-control: max-age=0", 
            "cache-control: must-revalidate"
          ],
          "/static/**/*": [
            "cache-control: public",
            "cache-control: max-age=31536000",
            "cache-control: immutable"
          ]
        }
      }
    }
  ],
}
