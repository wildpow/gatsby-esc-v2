import React from 'react';
import { Header, Nav, StyledLinkLeft, StyledLinkRight
        } from '../Styles/navStyles';

const Navigation = () => {
  return (
    <Header>
      <Nav>
        <StyledLinkLeft 
            to="/brands" 
          >Brands
        </StyledLinkLeft>
        <StyledLinkLeft 
            to="/adjustable" 
          >Adjustable
        </StyledLinkLeft>
        <StyledLinkLeft 
            to="/accessories" 
          >Accessories
        </StyledLinkLeft>
      </Nav>
      <Nav>
        <StyledLinkRight 
            to="/financing" 
              >Financing
        </StyledLinkRight>
        <StyledLinkRight 
            to="/blog" 
              >Our Blog
        </StyledLinkRight>
        <StyledLinkRight 
            to="/about" 
          >About Us
        </StyledLinkRight>
      </Nav>
    </Header>
  )
}




export default Navigation;



