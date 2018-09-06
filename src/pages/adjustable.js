import React from 'react';
import { graphql } from "gatsby"
import { Helmet } from "react-helmet";
import { Main, StyledLink, H3, InfoWrapper, Img, AdjMarkdown} from '../Styles/AdjustableStyles';
import BreadCrumbs, { BreadWrapper } from '../components/breadCrumbs';
import AdjLogo from '../Images/AdjLogo.png';
import Layout from '../components/layout'
const Adjustables = (props) => {
  return (
  <Layout>
    <Main MarginTop>
      <BreadWrapper hidenLarge>
        <BreadCrumbs here="Adjustable"/>
      </BreadWrapper>
      <Helmet>
        <title>ESC: Ajustable Bases</title>
        <meta name="description" content="E.S.C. Mattress Center carry 4 different Adjustable bases. Sometimes called Lifestyle bases or Movable bases. We have the Tempur-Pedic Ergo Premier and Ergo Plus, the Stearns & Foster Reflection 7, and the Sealy Ease bases. Sleep in zero gravity, or read, game or watch tv in the lounge position."/>
        <meta property="og:type"   content="website" />
        <meta property="og:site_name" content="E.S.C. Mattress Center"/>
        <meta property="og:url" content="https://www.escmattresscenter.com/"/>
        <meta property="og:image" content={AdjLogo}/> 
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="627"/>
        <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
        <meta property="og:title" content="E.S.C. Mattress Center"/>
        <meta property="og:description" content="E.S.C. Mattress Center carries many different Adjustable bases. Sometimes called Lifestyle bases or Movable bases. For instance we have the Tempur-Pedic Ergo Premier and Ergo Plus, the Stearns & Foster Reflection 7, and the Sealy Ease bases. Sleep in zero gravity, or read, game or watch tv in the lounge position."/>
      </Helmet>
      {props.data.allAdjBasese.edges.map(base => (
        <StyledLink to={`/adjustable/${base.node.uri}`} key={base.node.id}>
          <H3>{base.node.fullName}</H3>
          <InfoWrapper>
            <Img 
              src={`https://media.graphcms.com/resize=w:400,h:400,fit:clip/${base.node.coverImg.handle}`} 
              alt={`${base.node.fullName} Ajustable base`}
            />
            <AdjMarkdown source={base.node.features} escapeHtml={false} />
          </InfoWrapper>
        </StyledLink>
      ))}
    </Main>
  </Layout>
  )
}

export default Adjustables

export const allAdjustables = graphql`
  query allAdjustables {
    allAdjBasese(sort: {fields: value order: ASC} filter: {isPublished: {eq: true}}) {
    edges {
      node {
        fullName
        features
        uri
        id
        coverImg {
          handle
          height
          width
        }
      }
    }
  }
  }
`