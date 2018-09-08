const path = require('path')
const slash = require('slash')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const adjTemplate = path.resolve(`src/templates/base.js`)

    graphql(`
      {
        allAdjBasese {
          edges {
            node {
              isPublished
              id
              uri
            }
          }
        }
      }
    `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
      }
      result.data.allAdjBasese.edges.map(({ node}) => {
        createPage({
          path: `/adjustable/${node.uri}`,
          component: slash(adjTemplate),
          context: {
            uri: node.uri
          }
        })
      })
      resolve()
    })
  })
}
