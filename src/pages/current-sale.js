import React from 'react';
import Layout from '../components/layout';
import { graphql } from "gatsby"
import Helmet from 'react-helmet';
import { 
  MainWrapper, Wrapper, LinkWrapper,
  P, Wrapper2, Headline, StyledLink,
  MattImg, Name, PriceRange, Divy
} from '../styles/mattListStyles';

const CurrentSale = (props) => {
  const { isOnSale } = props.data
  return (
    <Layout>
      <Helmet>
          <title>{`ESC: ${isOnSale.tabTitle}`}</title>
          <meta name="description" content={isOnSale.description}/>
          <meta property="og:type"   content="website" />
          <meta property="og:site_name" content="E.S.C. Mattress Center"/>
          <meta property="og:url" content="https://www.escmattresscenter.com/current-sale"/>
          <meta property="og:image" content={`https://media.graphcms.com/resize=w:980,h:450,fit:clip/${isOnSale.currentSaleImg.handle}`}/>
          <meta property="og:image:width" content="980"/>
          <meta property="og:image:height" content="450"/>
          <meta property="og:image:alt" content={`E.S.C Mattress Center | ${isOnSale.saleName}`}/>
          <meta property="og:title" content="E.S.C. Mattress Center"/>
          <meta property="og:description" content={isOnSale.description}/>
        </Helmet>
      <MainWrapper>
        <Wrapper2>
          <Headline>{isOnSale.saleName}</Headline>
          <P>{isOnSale.description}</P>
          <Headline red>“Sleep Like the Experts Do!”</Headline>
        </Wrapper2>
        <Wrapper>
          {isOnSale.mattresses.map((mattress) => {
            return (
              <LinkWrapper key={mattress.id}>
                  <StyledLink to={`/brands/${mattress.uriBrandName}/${mattress.uri}`}>
                    <Divy>
                      <MattImg 
                        src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${mattress.coverImg.handle}`} 
                        alt={`Image of a ${mattress.brandName} ${mattress.subBrand} ${mattress.subName} mattress`}
                      />
                      <PriceRange>${mattress.priceRange[0]} - ${mattress.priceRange[1]}</PriceRange>
                    </Divy>
                    <Name>
                      {mattress.brandName}
                            <br/>
                      {mattress.subBrand}
                            <br/>
                      {mattress.subName}
                    </Name>
                  </StyledLink>
                </LinkWrapper>
            )
          })}
        </Wrapper>
      </MainWrapper>
      
    </Layout>
  )
}

export default CurrentSale

export const currentSaleQuery = graphql`
  query currentSaleQuery {
    isOnSale {
        id
        description
        tabTitle
        saleName
        currentSaleImg {
          handle
        }
        mattresses {
          id
          uriBrandName
          brandName
          orderByPrice
          uri
          subName
          subBrand
          priceRange
          coverImg {
            handle
          }
        }
      }
  }
`