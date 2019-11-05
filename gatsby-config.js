const config = require('./site-config.json')

module.exports = {
  siteMetadata: {
    title: `Von Bismarck - Reno`,
    description: `Von Bismarck is a modern family style restaurant inspired by the traditions of Eastern and Northern Europe with a focus on low intervention wine and traditional beer styles.`,
    longDescription:
      'Von Bismarck is a modern family style restaurant inspired by the traditions of Eastern and Northern Europe with a focus on low intervention wine and traditional beer styles. Helmed by Chef Scott Arn, formerly of Mugaritz, Von Bismarck aims to focus the best of the old world through a modern lens and present it in an atmosphere of conviviality and generosity. We believe communal seating and family style presentation are conducive to this end. Sharing a meal, whether with those you love or complete strangers is essential to the human experience and all of us here at Von Bismarck hope to help you on that journey.',
    email: 'info@vbreno.com',
    phone: '775.622.3687',
    street: '805 S Wells Ave 89502',
    city: 'Reno',
    hours: 'Wednesday-Sunday 11am-CLOSE',
    state: 'Nevada',
    author: `@laxaltandmciver`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/VB-favicon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
