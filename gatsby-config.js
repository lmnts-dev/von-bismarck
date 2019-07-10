module.exports = {
  siteMetadata: {
    title: `Von Bismarck - Reno`,
    description: `Von Bismarck features about a dozen draft beers, including highly regarded Ayinger Celebrator Doppelbock, a rich full lager first brewed by Bavarian monks.`,
    longDescription:
      'Von Bismarck features about a dozen draft beers, including highly regarded Ayinger Celebrator Doppelbock, a rich full lager first brewed by Bavarian monks. The opening menu at Von Bismarck offers smaller and larger plates, nearly two dozen in all. There are housemade pretzels with cheese sauce for dredging and housemade quark (a soft fresh cheese used in traditional German cheesecake, for one).',
    email: 'info@vbreno.com',
    phone: '775.622.3687',
    street: '805 S Wells Ave 89502',
    city: 'Reno',
    hours: 'Wednesday-Sunday 5pm-11pm',
    state: 'Nevada',
    author: `@laxaltandmciver`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,

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
