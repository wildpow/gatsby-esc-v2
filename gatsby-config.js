module.exports = {
  siteMetadata: {
    title: 'E.S.C Mattress Center',
  },
  plugins: [
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api-uswest.graphcms.com/v1/cjjcfrumo0za401dhel34jekw/master`,
        query: require("./gatsby/configQuery")
      }
    },
    'gatsby-plugin-react-helmet', `gatsby-plugin-styled-components`, `gatsby-plugin-netlify`],
}
