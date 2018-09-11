module.exports = {
  siteMetadata: {
    title: 'E.S.C Mattress Center',
    siteUrl: `https://www.escmattresscenter.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api.graphcms.com/simple/v1/cjlrp4qcs70qt0178mvh6gfn5`,
        query: require("./gatsby/configQuery")
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
      name: `E.S.C Mattress Center`,
      short_name: `E.S.C`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#1565c0`,
      display: `minimal-ui`,
      icon: `src/images/logo.png`, // This path is relative to the root of the site.
    },
    },
    `gatsby-plugin-offline`],
}
