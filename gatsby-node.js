const path = require('path');
const slash = require('slash');
const queryAll = require('./gatsby/queryAll');

// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators
//   return new Promise((resolve, reject) => {

//     const adjTemplate = path.resolve(`src/templates/base.js`)
//     resolve(
//       graphql(queryAll).then(result => {
//         if (result.errors) {
//           reject(result.errors);
//         }
//         const adjustable = result.data.allAdjBasese.edges;
//         adjustable.map(({ node}) => {
//           createPage({
//             path: `/adjustable/${node.uri}`,
//             component: slash(adjTemplate),
//             context: {
//               uri: node.uri
//             }
//           })
//         })
//     )

//       }
//     }
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const adjTemplate = path.resolve(`src/templates/base.js`);
    const mattressTemplate = path.resolve(`src/templates/mattress.js`);
    const postTemplate = path.resolve(`src/templates/post.js`);
    
    resolve(
      graphql(queryAll).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        const adjustables = result.data.allAdjBasese.edges;
        adjustables.map(({ node }) => {
          createPage({
            path: `/adjustable/${node.uri}`,
            component: slash(adjTemplate),
            context: {
              uri: node.uri
            }
          })
        })
        const mattresses = result.data.allMattress.edges;
        mattresses.map(({ node }) => {
          createPage({
            path: `/brands/${node.uriBrandName}/${node.uri}`,
            component: slash(mattressTemplate),
            context: {
              uri: node.uri
            }
          })
        })
        const posts = result.data.allPost.edges;
        posts.map(({ node }) => {
          createPage({
            path: `/blog/${node.slug}`,
            component: slash(postTemplate),
            context: {
              slug: node.slug
            }
          })
        })
        // console.log(result.data.allAdjBasese)
        // console.log(result.data.allMattress)
      })
    )
  })
}