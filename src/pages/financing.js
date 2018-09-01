import React from 'react';
import { CompanyWrapper, H3, P, InfoWrapper, Footer, CompanyWrapper2,
  Img, BottomP, ApplyNow, Main } from '../Styles/FinancingStyles';
import Synchrony from '../images/Synchrony_Card_Image.jpg';
import Acima from '../images/Acima_Logo.png';
import Layout from '../components/layout';
import Helmet from 'react-helmet'
import MetaLogo from '../Images/MetaLogo.png';

export default () => (
<Layout>
  <Main>
      <Helmet>
        <title>ESC: Financing</title>
        <meta name="description" content="Why spend your own money? We have 2 different financing options to suit your needs: Synchrony offers interest free financing, while Ascima offers a no credit needed option. Ask your local store for details."/>
        <meta property="og:type"   content="website" />
        <meta property="og:site_name" content="E.S.C. Mattress Center"/>
        <meta property="og:url" content="https://www.escmattresscenter.com/"/>
        <meta property="og:image" content={MetaLogo}/> 
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="627"/>
        <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
        <meta property="og:title" content="E.S.C. Mattress Center"/>
        <meta property="og:description" content="Why spend your own money? We have 2 different financing options to suit your needs: Synchrony offers interest free financing, while Ascima offers a no credit needed option. Ask your local store for details."/>
      </Helmet>
      <CompanyWrapper>
        <H3>Synchrony Financing</H3>
        <InfoWrapper>
          <Img src={Synchrony} alt="Synchrony Financial logo for E S C mattress center 0% interest financing options"/>
          <P>
          We partner with Synchrony Financial to offer 0% interest* financing options on approved credit.  The Synchrony Home card offers convenient monthly payments, 24/7 access to online account management, and is accepted at many retailers nationwide.
          </P>
        </InfoWrapper>
        <Footer><BottomP>*Subject to credit approval. Minimum monthly payments required. See store for details.</BottomP></Footer>
      </CompanyWrapper>
      <CompanyWrapper2>
        <H3>Acima No-Credit Needed Financing</H3>
        <InfoWrapper>
          <Img src={Acima} alt="Acima Financing logo for low or no credit financing options" />
          <P>
          Even if you have low or no credit we partner with Acima Financing to extend financing and help you purchase the bed of your dreams.  With the option to pay off your account in 90-day, or take time to repay your account over 12 months with payments scheduled to align with your payday.
          </P>
        </InfoWrapper>
        <div><ApplyNow href="https://www.img-media.net/customer/leases/new?merchant_id=910493" target="_blank" rel="noopener noreferrer">APPLY NOW</ApplyNow></div>
      </CompanyWrapper2>
    </Main>
  </Layout>
)