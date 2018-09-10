import React from 'react';
import { graphql } from "gatsby"
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import logo from '../images/logo.png';
import { Main, SiteLinks, MainLinks, MattLinksWrapper, BrandLinks,
  UnList, Lilist, BottomLinks } from '../styles/siteMapStyles';
import { H2 } from '../styles/mainStyles';
import AdjSiteMapData from '../components/adjStieMapData'
const SiteMap = (props) => {
  return (
  <React.Fragment>
    <Layout>
      <Helmet>
          <title>ESC: Site Map</title>
          <meta name="description" content="Sitemap for E.S.C Mattress Center website"/>        
          <meta property="og:type"   content="website" />
          <meta property="og:site_name" content="E.S.C. Mattress Center"/>
          <meta property="og:url" content="https://www.escmattresscenter.com/"/>
          <meta property="og:image" content={logo}/> 
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="627"/>
          <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
          <meta property="og:title" content="E.S.C. Mattress Center"/>
          <meta property="og:description" content="Sleep like the experts do."/>
        </Helmet>
        <MainLinks>
        <H2>Main Site Links</H2>
        <UnList>
          <Lilist><SiteLinks to="/">Home</SiteLinks></Lilist>
          <Lilist><SiteLinks to="/current-sale">Sale</SiteLinks></Lilist>
          <Lilist><SiteLinks to="/about">About</SiteLinks></Lilist>
          <Lilist><SiteLinks to="/accessories">Accessories</SiteLinks></Lilist>
          <Lilist><SiteLinks to="/financing">Financing</SiteLinks></Lilist>
          <Lilist><SiteLinks to="/adjustable">Adjustable</SiteLinks></Lilist>
          <Lilist><SiteLinks to="/brands">Brands</SiteLinks></Lilist>
        </UnList>
      </MainLinks>
      <MattLinksWrapper>
        <Main>
          <h3>
            <BrandLinks to="/brands/sealy">Sealy</BrandLinks>
          </h3>
          <ul>
            {props.data.allMattress.edges.map((mattress) => {
              if(mattress.node.brandName === 'Sealy') {
                return (
                  <li key={mattress.node.id}>
                    <SiteLinks to={`/brands/sealy/${mattress.node.uri}`}>
                      {mattress.node.subBrand} {mattress.node.subName}
                    </SiteLinks>
                  </li>
                )
              } else {
                return null
              } 
              })}
          </ul>
        </Main>
        <Main>
          <h3>
            <BrandLinks to="/brands/tempurpedic">
              Tempurpedic
            </BrandLinks>
          </h3>
          <ul>
            {props.data.allMattress.edges.map((mattress) => {
              if(mattress.node.brandName === 'Tempur-PEDIC') {
                return (
                  <li key={mattress.node.id}>
                    <SiteLinks to={`/brands/tempurpedic/${mattress.node.uri}`}>
                      {mattress.node.subBrand} {mattress.node.subName}
                    </SiteLinks>
                  </li>
                )
              } else {
                return null
              } 
              })}
          </ul>
        </Main>
        <Main>
          <h3>
            <BrandLinks to="brands/stearns">Stearns & Foster</BrandLinks>
          </h3>
          <ul>
            {props.data.allMattress.edges.map((mattress) => {
              if(mattress.node.brandName === 'Stearns & Foster®') {
                return (
                  <li key={mattress.node.id}>
                    <SiteLinks to={`/brands/tempurpedic/${mattress.node.uri}`}>
                      {mattress.node.subBrand} {mattress.node.subName}
                    </SiteLinks>
                  </li>
                )
              } else {
                return null
              } 
              })}
          </ul>
        </Main>
      </MattLinksWrapper>
      <BottomLinks>
        <Main>
          <h3>
            <BrandLinks to="/adjustable">Adjustable Bases</BrandLinks>
          </h3>
          <ul>
            <AdjSiteMapData/>
          </ul>
        </Main>
      </BottomLinks>
    </Layout>
  </React.Fragment>
  )
}

export default SiteMap

export const allMattressesSiteMap = graphql`
  query allMattressesSiteMap {
    allMattress(sort: {fields: orderByPrice order: ASC}) {
      edges {
        node {
          brandName
          id 
          subBrand
          subName
          uri
        }
      }
    }
  }
`;