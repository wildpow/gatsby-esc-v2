import React from 'react';
import { graphql } from "gatsby";
import Layout from '../../components/layout';
import Helmet from 'react-helmet';
import BreadCrumbs, { BreadWrapper } from '../../components/breadCrumbs';
import {  MainWrapper, Wrapper, LinkWrapper,
  MainTitle, SealyImgPlace, StyledLink, MattImg, Name, PriceRange, Divy } from '../../styles/mattListStyles';
import SealyImg from '../../images/SealyLogo.png';
import logo from '../../images/logo.png';

const Sealy = (props) => {
  const { edges } = props.data.allMattress;
  const title = 'sealy';
  return (
  <Layout>
    <MainWrapper>
      <Helmet>
        <title>ESC: Sealy Mattresses</title>
        <meta name="description" content="One of the worlds most recognized brands, Sealy offers all three styles of mattresses: Traditional innerspring, Hybrid, a mix of traditional and all foam, and all foam option. The Sealy line up offers a little something for everyone."/>
        <meta property="og:type"   content="website" />
        <meta property="og:site_name" content="E.S.C. Mattress Center"/>
        <meta property="og:url" content="https://www.escmattresscenter.com/"/>
        <meta property="og:image" content={logo}/> 
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="627"/>
        <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
        <meta property="og:title" content="E.S.C. Mattress Center | Sealy"/>
        <meta property="og:description" content="One of the worlds most recognized brands, Sealy offers all three styles of mattresses: Traditional innerspring, Hybrid, a mix of traditional and all foam, and all foam option. The Sealy line up offers a little something for everyone."/>
      </Helmet>
      <BreadWrapper Brands>
        <BreadCrumbs next="Brands" here="Sealy"/>
      </BreadWrapper>
      <MainTitle>
        <SealyImgPlace src={SealyImg} alt="A logo of the Sealy mattress company"/>
      </MainTitle>
      <Wrapper>
        {edges.map((mattress) => {
          if(mattress.node.subLine !== null) {
            if (mattress.node.subLine.subLineName === "Essentials") {
              return (
                <LinkWrapper>
                  <StyledLink to={`/brands/${title}/${mattress.node.uri}`}>
                    <Divy>
                      <MattImg src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${mattress.node.coverImg.handle}`} alt={`Image of a ${mattress.node.brandName} ${mattress.node.subBrand} ${mattress.node.subName} mattress`}/>
                      <PriceRange>${mattress.node.priceRange[0]} - ${mattress.node.priceRange[1]}</PriceRange>
                    </Divy>
                    <Name>
                      {mattress.node.brandName}
                            <br/>
                      {mattress.node.subBrand}
                            <br/>
                      {mattress.node.subName}
                    </Name>
                  </StyledLink>
                </LinkWrapper>
              )
            } else {
              return (null)
            }
          } else {
            return (null)
          }

        })}
        {edges.map((mattress) => {
          if(mattress.node.subLine !== null) {
            if (mattress.node.subLine.subLineName === "Performance") {
              return (
                <LinkWrapper>
                  <StyledLink to={`/brands/${title}/${mattress.node.uri}`}>
                    <Divy>
                      <MattImg src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${mattress.node.coverImg.handle}`} alt={`Image of a ${mattress.node.brandName} ${mattress.node.subBrand} ${mattress.node.subName} mattress`}/>
                      <PriceRange>${mattress.node.priceRange[0]} - ${mattress.node.priceRange[1]}</PriceRange>
                    </Divy>
                    <Name>
                      {mattress.node.brandName}
                            <br/>
                      {mattress.node.subBrand}
                            <br/>
                      {mattress.node.subName}
                    </Name>
                  </StyledLink>
                </LinkWrapper>
              )
            } else {
              return (null)
            }
          } else { 
            return (null)
          }

        })}
        {edges.map((mattress) => {
          if(mattress.node.subLine !== null) {
            if (mattress.node.subLine.subLineName === "Premium ") {
              return (
                <LinkWrapper>
                  <StyledLink to={`/brands/${title}/${mattress.node.uri}`}>
                    <Divy>
                      <MattImg src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${mattress.node.coverImg.handle}`} alt={`Image of a ${mattress.node.brandName} ${mattress.node.subBrand} ${mattress.node.subName} mattress`}/>
                      <PriceRange>${mattress.node.priceRange[0]} - ${mattress.node.priceRange[1]}</PriceRange>
                    </Divy>
                    <Name>
                      {mattress.node.brandName}
                            <br/>
                      {mattress.node.subBrand}
                            <br/>
                      {mattress.node.subName}
                    </Name>
                  </StyledLink>
                </LinkWrapper>
              )
            } else {
              return (null)
            }
          } else {
            return (null)
          }

        })}
      </Wrapper>
      <BreadWrapper Brands Bottom>
        <BreadCrumbs next="Brands" here="Sealy"/>
      </BreadWrapper>
    </MainWrapper>
  </Layout>
  )
}

export default Sealy;

export const allMattresses = graphql`
  query allMattresses {
    allMattress(sort: {fields: orderByPrice order: ASC}) {
      edges {
        node {
          brandName
          uri
          id
          subLine {
            subLineName
          }
          subName
          subBrand
          priceRange
          coverImg {
            handle
          }
        }
      }
    }
  }

`;