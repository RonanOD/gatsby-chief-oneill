require("dotenv").config({
  path: '.env'
})
const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `Chief O'Neill`,
    description: `Blog about Francis O'Neill: The Chicago Police Chief Who Saved Irish Music`,
    author: `@ronanodriscoll`,
    social: [
      {
          name: 'twitter',
          url: 'https://twitter.com/ronanodriscoll',
      },
      {
        name: `github`,
        url: `https://github.com/RonanOD`,
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: process.env.API_URL,
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: process.env.API_PROTOCOL,
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: false,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
      },
    },
    'gatsby-background-image',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `img`),
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      // Removes unused css rules
      resolve:'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: true,
        // Purge only the main css file
        purgeOnly: ['/all.sass'],
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
