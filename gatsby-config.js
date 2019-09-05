// Setup require variables
require("dotenv").config()

// Favicon icon sizes
const generateIconSizes = sizes => {
  return sizes.map(width => {
    return {
      src: `favicons/icon-${width}x${width}.png`,
      sizes: `${width}x${width}`,
      type: "image/png",
    }
  })
}

module.exports = {
  siteMetadata: {
    title: `Robin Wijnant Dev portfolio`,
    description: `The dev portfolio of Robin Wijnant. Find out more about me and the projects I have worked on. Links to code on GitHub provided.`,
    author: `@robinwijnant`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "@fika/gatsby-source-cockpit",
      options: {
        token: process.env.COCKPIT_TOKEN,
        baseUrl: "https://cms.robinwijnant.me",
        locales: ["any"],
        collections: ["projects"],
        singletons: ["home"],
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
        // Icons Hybrid mode
        // In automatic mode, icons will be exported to /icons
        // This conflicts with the Apache /icons symlink to /usr/share/apache2/icons/
        // (https://www.electrictoolbox.com/apache-icons-directory)
        // The solution is to create a favicons folder instead of the default icons folder
        icon: `src/images/logo.svg`,
        icons: generateIconSizes([48, 72, 96, 144, 192, 256, 384, 512]),
      },
    },
    "gatsby-plugin-emotion",
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
    "gatsby-plugin-flow",
    "gatsby-transformer-remark",
  ],
}
