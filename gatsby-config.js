module.exports = {
  siteMetadata: {
    title: `Von Bismarck - Reno`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nunc quam, tincidunt vel tellus vel, posuere vehicula dolor. Sed a dui sagittis, tempus velit vel, facilisis magna.`,
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nunc quam, tincidunt vel tellus vel, posuere vehicula dolor. Sed a dui sagittis, tempus velit vel, facilisis magna. Nulla ante libero, venenatis at sapien at, scelerisque sodales nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet turpis mollis, convallis nisi in, bibendum tellus. Donec sollicitudin quis quam et mollis. Proin molestie felis ipsum, in porttitor tortor condimentum nec. Suspendisse eu lectus mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer pharetra metus nec justo tempus iaculis. ',
    email: 'booking@vonbismarckreno.com',
    phone: '775.123.4567',
    street: '123 Wells Avenue',
    city: 'Reno',
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
