import React from 'react';
import { MainArticle, P, Heading } from '../Styles/PolicyStyles';
import Helmet from 'react-helmet';
import { H2 } from '../Styles/MainStyles';
import Layout from '../components/layout';
import MetaLogoPolicies from '../images/MetaLogoPolicies.png';

export default () => (
  <Layout>
    <MainArticle>
      <Helmet>
        <title>ESC: Terms and Policies</title>
        <meta name="description" content="Terms and Policies for E.S.C Mattress Center website"/>        
        <meta property="og:type"   content="website" />
        <meta property="og:site_name" content="E.S.C. Mattress Center"/>
        <meta property="og:url" content="https://www.escmattresscenter.com/"/>
        <meta property="og:image:secure_url" content={MetaLogoPolicies}/> 
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="627"/>
        <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
        <meta property="og:title" content="E.S.C. Mattress Center | Terms and Policies"/>
        <meta property="og:description" content="A licensed mattress retailer for Sealy, Stearns and Foster, and Tempur-Pedic offering almost fifty mattresses with prices to fit every budget.  ESC Mattress Center is a locally owned company in Everett WA with more than twenty years of mattress industry experience between our non-commissioned staff."/>
      </Helmet>
      <header>
        <H2>Terms and Policies</H2>
      </header>
      <Heading>90 Day Comfort Guarantee</Heading>
      <P>
        It will take anywhere from 30 to 90 nights for your new mattress to break in and for your body
        to adjust to the new support and comfort. Because of this, we ask that you sleep on your new mattress
        for a minimum of 30 nights to allow for adjustment. However, if you are not comfortable
        within 90 days of your original mattress’s delivery date, you may exchange or return your mattress one time in this period.
      </P>
      <P>
        Delivery and set up fees are non-refundable. We do not charge restocking fees, only a redelivery fee of $79.99.
        E.S.C. Mattress Center is unable to exchange or refund any mattress that is stained, soiled,
        or in any way damaged by you under this guarantee. Do not remove the Law Label from your mattress
        or foundation, doing so will void your 90 Day Comfort Guarantee. Please be aware that our Comfort
        Guarantee does not cover clearance merchandise, floor models, warranty exchanges, furniture,
        adjustable bases, pillows, mattress protectors, or other accessories. See associate for more details.
      </P>
      <Heading>Low Price Guarantee</Heading>
      <P>
        E.S.C. Mattress Center guarantees to meet, or beat, any other licensed retailer’s price on the same
        or comparable mattress set advertised for less than your invoiced price within 90 days of purchase.
        Bring in the advertisement and we will refund you the difference within 14 days. Note: Products for 
        sale on auction sites, such as eBay, Craigslist, etc. are excluded. Applies to new product only.
      </P>
      <Heading>Delivery</Heading>
      <P>
        We use a professional, licensed, outside delivery service for our deliveries. E.S.C. Mattress Center
        is not responsible for any loss or damage caused during delivery. Please make sure there is a clear 
        path from the door to the area you would like your mattress set placed. Removal is limited to number 
        of pieces being delivered and is limited to mattresses and foundations. Frames, furniture, waterbeds,
        etc. cannot be removed.
      </P>
      <P>
        If you choose to pick up your product, you should inspect your items carefully
        prior to leaving our store. We recommend the use of a covered truck for transporting mattress sets. 
        If requested, we will help you load and secure the merchandise into your vehicle, at your sole risk. 
        E.S.C. Mattress Center cannot be responsible for any damaged caused by our assistance. Any claim for 
        loss or damage due to the transportation of merchandise will be the sole responsibility of the customer.
      </P>
    </MainArticle>
  </Layout>
  )


