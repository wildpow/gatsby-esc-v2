import React from 'react';
import {Main, TempurImg, StearnsImg, SealyImg,
        MainText, Footer, StyledLink, BrandWrapper,
        StearnsWrapper } from '../Styles/BrandsStyles';
import BreadCrumbs, { BreadWrapper } from '../components/breadCrumbs';
import SealyLogo from '../images/SealyLogo.png';
import StearnsLogo from '../images/StearnsLogo.png';
import TempurLogo from '../images/TempurLogo2.png';
import { Helmet } from "react-helmet";
import Layout from '../components/layout'
import MetaLogo from '../Images/MetaLogo.png';
export default () => (
<Layout>
  <Main MarginTop>
    <Helmet>
      <title>ESC: Brands</title>
      <meta name="description" content="Come visit your locally owned, Everett based Sealy, Stearns and Foster & Tempur-Pedic dealer.  We have over 20 years of experience helping people sleep better on the brands we carry.  We carry 3 of the top 5 mattress brands in the US, so come see us, so we can help you sleep like the experts do!"/>
      <meta property="og:type"   content="website" />
      <meta property="og:site_name" content="E.S.C. Mattress Center"/>
      <meta property="og:url" content="https://www.escmattresscenter.com/"/>
      <meta property="og:image" content={MetaLogo}/> 
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="627"/>
      <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
      <meta property="og:title" content="E.S.C. Mattress Center"/>
      <meta property="og:description" content="Come visit your locally owned, Everett based Sealy, Stearns and Foster & Tempur-Pedic dealer.  We have over 20 years of experience helping people sleep better on the brands we carry.  We carry 3 of the top 5 mattress brands in the US, so come see us, so we can help you sleep like the experts do!"/>
    </Helmet>
    <BreadWrapper hidenLarge>
      <BreadCrumbs here="Brands"/>
    </BreadWrapper>
    <StyledLink to='/brands/tempurpedic' onMouseEnter={()=> console.log('link')} onTouchStart={()=> console.log('link')}>
    <BrandWrapper>
      <TempurImg src={TempurLogo} alt="Tempurpedic mattress company logo"/>
      <MainText>
        When Tempur-Pedic® introduced their proprietary TEMPUR® material they changed the way the world sleeps.
        TEMPUR® material is infinitely adaptable, responding to your body temperature, adapting to your weight
        and unique shape, giving you personalized support and alignment for undisturbed sleep.
      </MainText>
      <Footer blue>Tempur-Pedic:<br/> Life-changing sleep.</Footer>
    </BrandWrapper>
    </StyledLink>
    <StearnsWrapper to='/brands/stearns' onMouseEnter={()=> console.log('link')} onTouchStart={()=> console.log('link')}>
    <BrandWrapper>
    <StearnsImg src={StearnsLogo} alt="Stearn & Foster mattress company Logo"/>
      <MainText>
      The enduring craftsmanship of Stearns & Foster is their legacy.
      Since 1846 their specially-trained craftsmen have been building mattresses by hand,
      using techniques they developed and spent decades perfecting.  
      They’re so dedicated to what they do, they sign every one.
      </MainText>
      <Footer blue>Stearns & Foster:<br/> Crafting the world’s finest bed.</Footer>
    </BrandWrapper>
    </StearnsWrapper>
    <StyledLink to='/brands/sealy' onMouseEnter={()=> console.log('link')} onTouchStart={()=> console.log('link')}>
    <BrandWrapper>
      <SealyImg src={SealyLogo} alt="Sealy Mattress company Logo"/>
      <MainText>
        At the heart of every Sealy mattress is the support that’s right for you.
        Only Sealy has Posturepedic Technology™ to provide more support where you
        need it most.  By precisely engineering the mattress into specific zones,
        they’re able to target reinforced support, while providing exceptional full-body support.
      </MainText>
      <Footer blue>Sealy:<br/> Proud supporter of you.</Footer>
    </BrandWrapper>
    </StyledLink>
    <BreadWrapper hidenLarge Bottom>
      <BreadCrumbs here="Brands"/>
    </BreadWrapper>
  </Main>
</Layout>
)

    
