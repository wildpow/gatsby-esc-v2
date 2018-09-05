module.exports = {
  siteMetadata: {
    title: 'E.S.C Mattress Center',
  },
  plugins: [
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api.graphcms.com/simple/v1/escMattressProPandaJoshbillwill`,
        query: require("./gatsby/configQuery")
      }
    },
    'gatsby-plugin-react-helmet', `gatsby-plugin-styled-components`, `gatsby-plugin-netlify`],
}
