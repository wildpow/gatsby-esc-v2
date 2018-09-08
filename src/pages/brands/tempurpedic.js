import React from 'react';
import Layout from '../../components/layout';
import { graphql } from "gatsby"
import Helmet from 'react-helmet';
import {  MainWrapper,
  Wrapper, LinkWrapper, MainTitle, Img, 
  StyledLink, MattImg, Name, PriceRange, Divy 
} from '../../styles/mattListStyles';
import BreadCrumbs, { BreadWrapper } from '../../components/breadCrumbs';
import TempurImg from '../../images/tempurLogo2.png'
import logo from '../../images/logo.png';

const Tempurpedic = (props) => {
  const { edges } = props.data.allMattress;
  const title = 'tempurpedic';
  return (
    <Layout>
      <MainWrapper>
      <Helmet>
        <title>ESC: Tempur-Pedic Mattresses</title>
        <meta name="description" content="Tempurpedic is the most recommended brand in the US. They offer a memory foam mattress as well as their flex line, and innovative hybrid from the brand you know and love. Come see JD Power’s Consumers choice award winner for 2017."/>
        <meta property="og:type"   content="website" />
        <meta property="og:site_name" content="E.S.C. Mattress Center"/>
        <meta property="og:url" content="https://www.escmattresscenter.com/"/>
        <meta property="og:image" content={logo}/> 
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="627"/>
        <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
        <meta property="og:title" content="E.S.C. Mattress Center | Tempurpedic"/>
        <meta property="og:description" content="Tempurpedic is the most recommended brand in the US. They offer a memory foam mattress as well as their flex line, and innovative hybrid from the brand you know and love. Come see JD Power’s Consumers choice award winner for 2017."/>          
      </Helmet>
      <BreadWrapper Brands>
        <BreadCrumbs next="Brands" here="Tempurpedic"/>
      </BreadWrapper>
      <MainTitle>
        <Img src={TempurImg} alt="Logo of the Tempurpedic mattress company"/>
      </MainTitle>
      <Wrapper>
        {edges.map((mattress) => {
          return (
          <LinkWrapper key={mattress.node.id} >
            <StyledLink to={`/brands/${title}/${mattress.node.uri}`}>
              <Divy>
                <MattImg 
                  src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${mattress.node.coverImg.handle}`} 
                  alt={`Image of a ${mattress.node.brandName} ${mattress.node.subBrand} ${mattress.node.subName} mattress`}
                />
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
        })}
      </Wrapper>
      <BreadWrapper Brands Bottom>
        <BreadCrumbs next="Brands" here="Tempurpedic"/>
      </BreadWrapper>
    </MainWrapper>
    </Layout>
  )
}

export default Tempurpedic

export const tempurMattresses = graphql`
  query tempurMattresses {
    allMattress(sort: {fields: orderByPrice order: ASC} filter: {brandName: {in: "Tempur-PEDIC"} isPublished: {eq: true}}){
      edges {
        node {
          brandName
          uri
          id
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