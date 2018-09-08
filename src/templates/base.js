import React from 'react';
import Layout from '../components/layout';
import { graphql } from "gatsby"

const Base = (props) => {
  return (
    <Layout>
      <h1>Adjustable base</h1>
      {console.log(props)}
    </Layout>
  )
}

export default Base;

export const query = graphql`
  query SingleAjustableQuery($uri: String!) {
    adjBasese(uri: { eq: $uri}) {
      uri
    }
  }
`