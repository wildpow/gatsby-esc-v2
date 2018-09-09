module.exports = `{
  allToppers(filter: {isPublished: true}) {
    isPublished
    id
    currentpromo
  }
  allCarousels(filter: {isPublished: true}) {
    isPublished
    id
    image {
      handle
      width
      height
    }
    altTextForImage
    url
  }
  allFronts(filter: {isPublished: true}) {
    isPublished
    id
    title
    textBlock
  }
  allAdjBaseses(filter: {isPublished: true}) {
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
  allMattresses(filter: {isPublished: true}) {
    id
    isPublished
    subLine {
      subLineName
    }
    orderByPrice
    brandName
    uri
    subName
    subBrand
    priceRange
    coverImg {
      handle
      width
      height
    }	
  }
  
  
  }`
  // allSubLines {
  //   id
  // 	subLineName
  //   mattresses {
  //     orderByPrice
  //     id
  //     brandName
  //     uri
  //     subBrand
  //     subName
  //     priceRange
  //     coverImg {
  //       height
  //       width
  //       handle
  //     }
  //   }
  // }


  // SubLine(subLineName: "performance") {
  //   mattresses(filter: {isPublished: true} orderBy: orderByPrice_ASC  ) {
  //     brandName
  //     id
  //     uri
  //     subBrand
  //     subName
  //     priceRange
  //     coverImg {
  //       handle
  //     }
  //   }
  // }

  
  //   adjBaseses {
  //     orderByPrice
  //     fullName
  //     brandName
  //     baseDescription
  //     keyFeatures
  //     mainFeatures
  //     warranty
  //     id
  //     uri
  //     retailPrice
  //     salePrice
  //     coverImage {
  //       handle
  //       height
  //       width
  //     }
  //     secondImage {
  //       handle
  //       height
  //       width
  //     }
  //     thirdImage {
  //       handle
  //       height
  //       width
  //     }
      
  //   }


  //// ALL MATT

  // allMattresses {
  // 	brandName
  // 	uri
  //   id
  //   orderByPrice
  //   isPublished
  // 	subName
  // 	subBrand
  // 	priceRange
  // 	coverImg {
  //   	height
  //   	handle
  //   	width
  // 	}
  // }