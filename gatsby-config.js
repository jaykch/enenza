module.exports = {
  siteMetadata: {
    title: `Enenza`,
    description: `Book a ride with Enenza, a London based executive travel service providing airport transfers, corporate travel and on-demand rides. A premium service at affordable prices.`,
    author: `@jaykch`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-antd',
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
        name: `Enenza`,
        short_name: `Enenza`,
        start_url: `/`,
        background_color: `#09121b`,
        theme_color: `#09121b`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
