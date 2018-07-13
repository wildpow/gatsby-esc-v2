import React from 'react';
import logo from '../images/logo.png';
import { Image, H1, Span, StyledLink, Wrapper } from '../Styles/LogoStyles';

const Logo = () => {
  return (
    <Wrapper>
      <StyledLink to="/">
        <Image src={logo} alt="E S C Mattress Center logo of a sleeping panda"/>  
      </StyledLink>
      <H1><Span>E.S.C.</Span> Mattress Center </H1>
    </Wrapper>
  )
};


export default Logo;