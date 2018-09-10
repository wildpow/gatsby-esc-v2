import React from 'react';
import Layout from '../components/layout';
import { graphql } from "gatsby"
import BreadCrumbs, { BreadWrapper } from '../components/breadCrumbs';
import { Helmet } from "react-helmet";
import ImageViewer from '../components/imageViewer';
import DropDown from '../components/dropDown';
import { Wrapper, Main, MainInfo, PriceWrapper,
  Price, PriceTitle, Warranty, Description, Overview,
        Article, StyledMarkDown, Profile, MainTitle, InfoAnchor, Stuff }
        from '../styles/singleMattStyles';
const Base = (props) => {
  const { adjBasese } = props.data
  return (
    <Layout>
      <BreadWrapper>
        <BreadCrumbs next="Adjustable" here={adjBasese.fullName}/>
      </BreadWrapper>
      <Wrapper>
        <Helmet>
          <title>ESC: {adjBasese.fullName}</title>
          <meta name="description" content={adjBasese.baseDescription}/>
          <meta property="og:type"   content="website" />
          <meta property="og:site_name" content="E.S.C. Mattress Center"/>
          <meta property="og:url" content={`https://www.escmattresscenter.com/adjustable/${adjBasese.uri}`}/>
          <meta property="og:image" content={`https://media.graphcms.com/resize=w:1200,h:627,fit:clip/${adjBasese.coverImg.handle}`}/>
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="627"/>
          <meta property="og:image:alt" content={`E.S.C Mattress Center | ${adjBasese.fullName}`}/>
          <meta property="og:title" content="E.S.C Mattress Center"/>
          <meta property="og:description" content={`${adjBasese.fullName} Adjustable Base`}/>
        </Helmet>
        <header>
          <MainTitle>{adjBasese.fullName}</MainTitle>
        </header>
        <Main>
          <ImageViewer 
            cover={adjBasese.coverImg.handle} 
            img1={adjBasese.detail1.handle} 
            img2={adjBasese.detail2.handle} 
            type={'adjustable base without mattress'} 
            fullname={adjBasese.fullName}
          />
          <MainInfo>
            <Stuff>
              <StyledMarkDown source={adjBasese.features} escapeHtml={false} />
              <InfoAnchor href="#moreInfo">See more details</InfoAnchor>
            </Stuff>
            <PriceWrapper>
              <Price>
                <PriceTitle>Base Price</PriceTitle>
                <DropDown data={adjBasese.price} data2={adjBasese.salePrice}/>
              </Price>
            </PriceWrapper>
          </MainInfo>
        </Main>
        <Overview id="moreInfo">
          <h2>OVERVIEW & SPECS</h2>
        </Overview>
        <Article>
          <Description>
            {adjBasese.baseDescription}
          </Description>
          <Profile>Profile: {adjBasese.height}</Profile>
          <StyledMarkDown source={adjBasese.keyfeatures} escapeHtml={false} />
          <Warranty>{adjBasese.warranty}</Warranty>
        </Article>
      </Wrapper>
      <BreadWrapper>
        <BreadCrumbs next="adjustable" here={adjBasese.fullName}/>
      </BreadWrapper>
    </Layout>
  )
}

export default Base;

export const query = graphql`
  query SingleAjustableQuery($uri: String!) {
    adjBasese(uri: { eq: $uri}) {
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
`