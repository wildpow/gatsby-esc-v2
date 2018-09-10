import styled from 'styled-components'
// import { NavLink } from 'gatsby';
import { Link } from 'gatsby';

import { Blue, Red, MainFont1, Border, BoxShadow } from './mainStyles.js';

export const Button = styled.button`
  float: right;
  cursor: pointer;
  outline: none;
  background: transparent;
  border: none;
  outline: none;
  font-size: 0;
  overflow: visible;
  margin: 30px;
  transition-property: transform;
  transition-duration: .5s;
  margin-top: 5px;
  margin-left: -130px;
  margin-right: 0px;
  &:hover { cursor: pointer; transform: scale(1.2, 1.2); }
  @media (min-width: 768px) { margin-top: 20px; margin-bottom: 20px;
    margin-left: -130px;
    margin-right: 50px;
}
  @media (min-width: 1022px) { display: none; }
`;

export const MenuLines = styled.span`
  position: relative;
  display: inline-block;
  width: 47px;
  height: 37px;
  vertical-align: middle;
  span {
    position: absolute;
    display: block;
    height: 6px;
    width: 70%;
  }
  span:nth-child(1) { top: 0; background: ${Red}; }
  span:nth-child(2) { top: 10px; background-color: ${Blue}; }
  span:nth-child(3) { top: 20px; background: ${Red}; }

  @media(min-width: 768px) {
    span { height: 8px !important; width: 100% !important; }
    span:nth-child(2) { top: 15px !important; }
    span:nth-child(3) { top: 30px !important; }
  }
`;

export const Bar = styled.span`
  width: 35px;
  height: 5px;
  margin: 6px 0;
  transition: 0.4s;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Blue};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform .3s cubic-bezier(0, .52, 0, 1);
  overflow: hidden !important;
  &.hide { transform: translate3d(-100vw, 0, 0); }
  &.show { transform: translate3d(0vw, 0, 0); }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  @media(orientation: landscape) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media(min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    flex-grow: 1;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    margin-top: 150px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  z-index: 2000;
  font-family: ${MainFont1};
  font-size: 1.7rem;
  font-variant: small-caps;
  letter-spacing: .22rem;
  color: white;
  text-decoration: none;
  transition: all .20s ease-in;
  border-bottom: 8px solid ${Blue};
  /* Still working on these */
  text-align: center;
  margin: auto;
  /*----- */
  padding: 12px 28px 5px 28px;
  &:hover { transform: scale3d(1.2,1.3,1); }
  &.active { border-bottom: 8px solid ${Red}; }
  @media(min-width: 360px) {
    padding: 12px 28px 5px 28px;
  }
  @media(orientation: portrait) and (min-width: 411px) { 
    font-size: 2rem;
  }
  @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3) { 
      font-size: 2rem;
      margin-bottom: 10px;
    }
  @media(orientation: landscape) { 
    padding: 20px 20px 5px 20px;
    
  }
  @media(min-width: 768px) {
    font-size: 2.6rem;
  }
`;

export const BottomLinks = StyledLink.extend`
  @media(min-width: 768px) {
    margin-top: 0px;
    text-align: center;
  }
`;

export const NoLinkOnSM = styled.div`
  display: none;
  @media(orientation: landscape) {
    display: flex;
  }
  @media(min-width: 768px) {
    display: flex;
    margin: auto;
  }
`;

export const LastLinkWrapper = styled.div`
  display: none;
  @media(orientation: landscape) {
    margin-top: 10px;
    display: block;
  }
  @media(min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-grow: 0;
    margin: 0 auto;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Image = styled.img`
  transition: all .25s ease-in;
  max-height: 6em;
  margin: 0 auto !important;
  padding-bottom: 10px;
  margin: auto;
  @media(min-width: 500px) and (orientation: landscape) {
    display: none;
  }
  @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3) { 
      max-height: 12rem;
      z-index: 1000;
    }
  @media (min-width: 500px) { max-height: 8em; }
  @media (min-width: 768px) { 
    max-height: 14em;
    padding-bottom: 0px;
    z-index: 1000;
  }
  @media(min-width: 1024px) and (orientation: landscape) {
    display: block;
  } 
`;

export const BGcolorWrapper = styled.div`
  display: none;
  border: ${Border};
  box-shadow: ${BoxShadow};
  @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3) { 
      background-color: white;
      margin: auto;
      padding: 15px 25px 15px 25px;
      display: block;
      margin-top: -55px;
      border-radius: .2rem;
      }
  @media(min-width: 768px) and (orientation: portrait){
    background-color: white;
    margin: auto;
    padding: 15px 45px 15px 45px;
    display: block;
    margin-top: -49px;
    border-radius: .2rem;
    margin-bottom: 30px;
  }
  @media(min-width: 1024px) and (orientation: landscape) {
    background-color: white;
    margin: auto;
    padding: 15px 45px 15px 45px;
    display: block;
    margin-top: -49px;
    border-radius: .2rem;
    margin-bottom: 30px;
  }
`;