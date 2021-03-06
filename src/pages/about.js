import React from "react";
// import Link from "gatsby-link";
import { Main, PicHolder, StoreImg, MapImg,
          Address, Span, RegularParagraph, BlueWrapper,
          SecondP, PopImg, PopNameHolder, Bill, Josh, Will  } from '../styles/aboutStyles.js';
import { FlexCol, H2 } from '../styles/mainStyles.js';
import store1 from '../images/outsideNightRatio.jpg';
import store2 from '../images/outsideDayRatio.jpg';
import map from '../images/storeMapRatio.png';
import pop from '../images/funCo.png';
import Helmet from 'react-helmet'
import logo from '../images/logo.png';
import Layout from '../components/layout'


export default () => (
<Layout>
  <Main>
    <Helmet>
      <title>ESC: About Us</title>
      <meta name="description" content="Three of the best trained mattress sales people in Western Washington decided to open their own store; so that they could help people the way they believe they should be helped!  We are bringing back the service you are used to!"/>
      <meta property="og:type"   content="website" />
      <meta property="og:site_name" content="E.S.C. Mattress Center"/>
      <meta property="og:url" content="https://www.escmattresscenter.com/"/>
      <meta property="og:image" content={logo}/> 
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="627"/>
      <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
      <meta property="og:title" content="E.S.C. Mattress Center"/>
      <meta property="og:description" content="Three of the best trained mattress sales people in Western Washington decided to open their own store; so that they could help people the way they believe they should be helped!  We are bringing back the service you are used to!"/>
    </Helmet>
    <header>
        <H2> Our goal is to help Snohomish County sleep like the experts do and wake up feeling better.</H2>
    </header>

    <PicHolder>
      <StoreImg src={store1} alt="E.S.C Mattress Center store front in Everett Washington at night"/>
      <MapImg src={map} alt="Map of our mattress store the showing the major cross streets of Pacific Hwy/ Evergreen Way and Everett Mall Way"/>
      <StoreImg src={store2} alt="E.S.C Matttress Center store front from Everett Mall Way in Snohomish County"/>
    </PicHolder>

    <Address>
      <Span>We are located at 10121 Evergreen Way #30, Everett WA 98204.</Span><br/>
      We are on Everett Mall Way next to Outback Steakhouse
      and across the street from Enterprise car rentals.
    </Address>

    <RegularParagraph>
      We started our own mattress store to do things differently.  Instead of focusing on commissions or the lowest 
      priced rectangle, we want to focus on you and getting you the best night’s sleep possible.
      With over twenty years of combined industry experience we take pride in helping you find the
      “bed of your dreams” so that you can wake up feeling rested and ready to take on all that 
      your day has to offer.
    </RegularParagraph>
    
    <RegularParagraph>
      We’re here to help advise you by having our non-commissioned staff
      ask you some questions and listen to your answers to help recommend products that suit your needs.
      We believe sleep is an important part of everyone’s day, and people have a better life when they’re waking
      up every morning feeling rested, rejuvenated and refreshed.
    </RegularParagraph>

    <BlueWrapper>
      <SecondP>
        We offer almost fifty mattresses in a wide range of prices to fit every budget.  Our mattresses are made in the USA 
        -- with most of them coming from local manufacturing plants -- 
        and are brands that most people know and trust <br/>(Sealy, Stearns & Foster, Tempur-Pedic).  
      </SecondP>
    </BlueWrapper>

    <RegularParagraph>
      We are locally owned and operated, and use a highly rated local delivery service for our white glove delivery.
      While our main area of focus is our local community, we can arrange delivery to most of Western Washington,
      so if you’re willing to make the trip we’re probably willing to find a way to get your bed to you 
      (but you can always call ahead and check).  Come on down and visit us so we can help you start waking
      up feeling great and “sleep like the experts do”.
    </RegularParagraph>
      
    <FlexCol>  
      <FlexCol>
        <PopNameHolder>
          <Bill>Bill</Bill><Josh>Joshua</Josh><Will>William</Will>
        </PopNameHolder>
        <PopImg src={pop} alt="FunCo toys of E.S.C Mattress Centers co-founders Bill, Joshua and William"/>
      </FlexCol>
    </FlexCol>

  </Main>
</Layout>
);