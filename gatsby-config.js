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
        // Hybrid mode
        // This is needed because apache has an alias from /icons to the 
        // Apache "/usr/share/apache2/icons/" more info: https://www.electrictoolbox.com/apache-icons-directory
        // Create favicons folder instead of the default icons folder
        icon: `src/images/logo.svg`,
        icons: [
          {
            "src": "favicons/icon-48x48.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
        ],
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
