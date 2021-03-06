import React from 'react';
import { StyledLink, BottomLinks, Nav,
  Wrapper, Image, Footer, BGcolorWrapper,
  NoLinkOnSM, LinkWrapper, LastLinkWrapper }  from '../styles/menuStyles';
import Topper from './Topper';
import logo from '../images/logo.png';
import SocialIcons from './socialIcons';

const Menu = (props) => {
  var visibility = "hide";
    if (props.menuVisibility) {
      visibility = "show";
    }
  return (
    <Wrapper
      onMouseUp={props.handleMouseDown} 
      className={visibility}
    >
      <Topper/>
      <Nav>
        <LinkWrapper>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/current-sale">Sale</StyledLink>
          <StyledLink to="/brands">Brands</StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink to="/adjustable" >Adjustable</StyledLink>
          <StyledLink to="/accessories">Accessories</StyledLink>
          <StyledLink to="/financing">Financing</StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink to="/blog" >Our Blog</StyledLink>
          <StyledLink to="/about">About Us</StyledLink>
          <NoLinkOnSM> 
            <StyledLink to="/warranty">Warranty</StyledLink>
          </NoLinkOnSM>
        </LinkWrapper>
        <LastLinkWrapper>
          <BottomLinks to="/policies">Policies</BottomLinks>
          <BottomLinks to="/sitemap">Site Map</BottomLinks>
        </LastLinkWrapper>
      </Nav>
      <Footer>
        <Image src={logo} alt="Image of E S C Mattress Center sleeping panda bear"/>
        <BGcolorWrapper>
          <SocialIcons/>
        </BGcolorWrapper>
      </Footer>
    </Wrapper>
  )
}
export default Menu