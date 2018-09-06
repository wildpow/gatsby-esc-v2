import React from 'react';
import { Main, H3, InfoWrapper, InfoWrapperReversed, AccWrapper, AccWrapper2, Img, P, Img2} from '../Styles/AccessoryStyles';
import Frame from '../images/frame.jpg';
import Pillows from '../images/PillowCollage.jpg';
import Protector from '../images/Protector.jpg';
import Sheets from '../images/SheetStack.jpg';
import Layout from '../components/layout';
import MetaLogo from '../images/MetaLogoAcc.png';
import Helmet from 'react-helmet'

export default () => (
<Layout>
  <Main>
      <Helmet>
        <title>ESC: Accessories</title>
        <meta name="description" content="Sleep system means more than a mattress and box, let us help you find a Pillow, Sheets, and Protector that will help you sleep better. We carry Dream Fit Sheets, Protect a bed Pillows & Protectors, Tempurpedic pillows, and Thecnogel Pillows. We can help with cooling as well if needed."/>
        <meta property="og:type"   content="website" />
        <meta property="og:site_name" content="E.S.C. Mattress Center"/>
        <meta property="og:url" content="https://www.escmattresscenter.com/"/>
        <meta property="og:image" content={MetaLogo}/> 
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="627"/>
        <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
        <meta property="og:title" content="E.S.C. Mattress Center"/>
        <meta property="og:description" content="Sleep system means more than a mattress and box, let us help you find a Pillow, Sheets, and Protector that will help you sleep better. We carry Dream Fit Sheets, Protect a bed Pillows & Protectors, Tempurpedic pillows, and Thecnogel Pillows. We can help with cooling as well if needed."/>
      </Helmet>
      <AccWrapper>
        <H3>Pillows</H3>
        <InfoWrapper>
          <Img src={Pillows}/>
          <P>We carry a wide range of pillows from Tempur-Pedic, Technogel, Protect-A-Bed, Sealy, and Stearns & Foster to others. Offering a large selection of heights and firmnesses to compliment any sleeping style and body type.</P>
        </InfoWrapper>
      </AccWrapper>
      <AccWrapper>
        <H3>Sheets</H3>
        <InfoWrapperReversed>
          <Img2 src={Sheets}/>
          <P>We proudly carry the full collection of DreamFit sheets. Ranging from a basic microfiber to luxurious Micro Tencel. All DreamFit sheets are of the upmost quality and are guaranteed not to "pop off" your mattress during the night.</P>
        </InfoWrapperReversed>
      </AccWrapper>
      <AccWrapper>
        <H3>Mattress Protectors</H3>
        <InfoWrapper>
          <Img src={Protector}/>
          <P>We carry a comprehensive selection of mattress protection options from Protect-A-Bed, the industry leader in mattress protection.  With options including Tencel, Active Cooling, 5-Sided and complete encasements protecting from spills, stains, and soiling.</P>
        </InfoWrapper>
      </AccWrapper>
      <AccWrapper2>
        <H3>Bed Frames</H3>
        <InfoWrapperReversed>
          <Img2 src={Frame}/>
          <P>Leggett & Platt makes some of the best metal supports and decorative frames on the market.  Whether you need a basic frame to lift your mattress set off the ground, or want something to bring your room to life we have an option for you here.</P>
        </InfoWrapperReversed>
      </AccWrapper2>
    </Main>
  </Layout>
)