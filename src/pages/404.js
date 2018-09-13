import React from 'react'
import Layout from '../components/layout'
import { Main, Img } from '../styles/panda404Styles';
import { H2 } from '../styles/mainStyles';
import { Link } from 'gatsby'
import image from '../images/ezgif.com-optimize.gif';
import BreadCrumbs, { BreadWrapper } from '../components/breadCrumbs';

const NotFoundPage = () => {
  let uri = []
  if(typeof window !== "undefined") {
    uri = window.location.href.split('/')
  } else {
    uri = ['']
  }
  return (
  <Layout>
    {/* {console.log(uri)} */}
    <BreadWrapper>
      <BreadCrumbs here={uri[uri.length-1]}/>
    </BreadWrapper>
    <Main>
      <header>
        {/* {console.log(props.location.href)}
        {console.log(uri[uri.length-1])} */}
        <H2>Our panda couldn't find the product you're looking for...</H2>
      </header>
      
      <Link to='/'><Img src={image} alt="E S C Mattress Center Sleeping Panda "/></Link>
    </Main>
    <BreadWrapper>
      <BreadCrumbs here={uri[uri.length-1]}/>
    </BreadWrapper>
  </Layout>
  )
}


export default NotFoundPage
