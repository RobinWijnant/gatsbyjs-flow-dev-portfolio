module.exports = {
  siteMetadata: {
    title: `Robin Wijnant`,
    description: `The dev portfolio of Robin Wijnant. Find out more about me and the projects I have worked on. Links to code on GitHub provided.`,
    author: `@robinwijnant`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Robin Wijnant`,
        short_name: `Robin Wijnant`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `500`, `600`, `700`],
          },
        ],
      },
    },
  ],
}
