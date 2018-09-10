'use strict'

// module.exports = `
//   {
//   allAdjBasese {
//     edges {
//       node {
//         id
//         uri
//         fullName
//         keyfeatures
//         features
//         price
//         salePrice
//         brandLine
//         brandName
//         baseDescription
//         height
//         warranty
//         coverImg {
//           handle
//         }
//         detail1 {
//           handle
//         } 
//         detail2 {
//           handle
//         }
//       }
//     }
//   }
//   allMattresses {
//     edges {
//       node {
//         uri
//       }
//     }
//   }
// }
// `

module.exports = `
  {
    allAdjBasese(filter: {isPublished: {eq: true}}) {
      edges {
        node {
          isPublished
          id
          brandName
          warranty
          brandLine
          baseDescription
          uri
          value
          height
          features
          fullName
          keyfeatures
          salePrice
          price
          coverImg {
            height
            handle
            width
          }
          detail1 {
            height
            handle
            width
          }
          detail2 {
            height
            handle
            width
          }
        }
      }
    }
    allMattress(filter: {isPublished: {eq: true}}) {
      edges {
        node {
          id
          isPublished
          uri
          uriBrandName
          brandName
          subName
          subBrand
          name
          discription
          features
          profile
          contruction
          mattOnly
          mattOnlySale
          setPrice
          setPriceSale
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