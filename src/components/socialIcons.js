import React from 'react';
import { Social, YelpHolder, YelpImg, FBimage, Timage, InstaImg, MapsImg } from '../Styles/FooterStyles';
import fbIcon from '../images/FB.png';
import twitterIcon from '../images/twitter.png';
import Yelp from '../images/Yelp_burst_negative_RGB.png';
import Insta from '../images/glyph-logo_May2016.png';
import Google from '../images/Google_Maps_App_3.png';

const SocialIcons = () => {
  return (
    <Social>
          <a href="https://www.facebook.com/ESCMattressCenter/" target="_blank" rel="noopener noreferrer">
            <FBimage src={fbIcon} alt="Face Book logo" />
          </a>
          <a href="https://twitter.com/CenterEsc?ref_src=twsrc%5Etfw" data-size="large" target="_blank" rel="noopener noreferrer">
            <Timage src={twitterIcon} alt="twitter logo"/>
          </a>
          <a href="https://www.instagram.com/escmattresscenter/" target="_blank" rel="noopener noreferrer">
            <InstaImg src={Insta} alt="Instagram logo"/>
          </a>
          <a href="https://www.yelp.com/biz/esc-mattress-center-everett-3" target="_blank" rel="noopener noreferrer">
            <YelpHolder>
              <YelpImg src={Yelp} alt="yelp logo"/>
            </YelpHolder>
          </a>
          <a href="https://goo.gl/maps/AivxRZEWVwm" target="_blank" rel="noopener noreferrer">
            <MapsImg src={Google} alt="google maps logo"/>
          </a>
        </Social>
  )
}

export default SocialIcons;