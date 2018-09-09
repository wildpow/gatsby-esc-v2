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
              id
              uri
              fullName
              keyfeatures
              features
              price
              salePrice
              brandLine
              brandName
              baseDescription
              height
              warranty
              coverImg {
                handle
              }
              detail1 {
                handle
              } 
              detail2 {
                handle
              }
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
