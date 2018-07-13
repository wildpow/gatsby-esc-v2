import React from 'react';
import { Header, Nav, StyledLinkLeft, StyledLinkRight
        } from '../Styles/navStyles';

const Navigation = () => {
  return (
    <Header>
      <Nav>
        <StyledLinkLeft
            activeStyle={{
                borderBottom: '8px solid #eb1c24',
                borderTop: '0px solid #eb1c24'
            }}
            to="/brands" 
          >Brands
        </StyledLinkLeft>
        <StyledLinkLeft 
            to="/adjustable"
            activeStyle={{
              borderBottom: '8px solid #eb1c24',
              borderTop: '0px solid #eb1c24'
          }} 
          >Adjustable
        </StyledLinkLeft>
        <StyledLinkLeft 
            to="/accessories"
            activeStyle={{
              borderBottom: '8px solid #eb1c24',
              borderTop: '0px solid #eb1c24'
          }} 
          >Accessories
        </StyledLinkLeft>
      </Nav>
      <Nav>
        <StyledLinkRight 
            to="/financing"
            activeStyle={{
              borderBottom: '8px solid #eb1c24',
              borderTop: '0px solid #eb1c24'
          }} 
              >Financing
        </StyledLinkRight>
        <StyledLinkRight 
            to="/blog"
            activeStyle={{
              borderBottom: '8px solid #eb1c24',
              borderTop: '0px solid #eb1c24'
          }} 
              >Our Blog
        </StyledLinkRight>
        <StyledLinkRight 
            to="/about"
            activeStyle={{
              borderBottom: '8px solid #eb1c24',
              borderTop: '0px solid #eb1c24'
          }} 
          >About Us
        </StyledLinkRight>
      </Nav>
    </Header>
  )
}




export default Navigation;



