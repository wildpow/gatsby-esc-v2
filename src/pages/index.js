import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const DevFlexing = styled.div`
display: flex;
flex-direction: column;
`
const IndexPage = () => (
  <Layout>
  
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <DevFlexing>
      <Link to="/page-2">Go to page 2</Link>
      <Link to="/about">About</Link>
      <Link to="/financing">financing</Link>
      <Link to="/accessories">accessories</Link>
      <Link to="/brands">brands</Link>
    </DevFlexing>
  </Layout>
)

export default IndexPage
