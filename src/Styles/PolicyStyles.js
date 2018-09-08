import styled from 'styled-components';
import {FadeIn, Border, BoxShadow,
        MainFont1, MainFont2, Blue,
        TextShadow, FlexCol, Animation,
        RedBorderBottom } from './mainStyles.js';

export const MainArticle = styled.article`
  border: ${Border};
  box-shadow: ${BoxShadow};
  animation-name: ${FadeIn};
  ${Animation}
  margin-top: 15px;
  @media(min-width: 1300px) {
    margin-left: 85px;
    margin-right: 85px;
  }
`;

export const WarranyName = styled.h4`
  font-family: ${MainFont1};
  border-bottom: ${RedBorderBottom};
  text-align: center;
  margin: 0 auto;
  font-size: 1rem;
  letter-spacing: .09rem;
  @media(min-width: 768px) { font-size: 1.5rem; letter-spacing: .12rem;}
  @media(min-width: 1022px) { font-size: 1.7rem; letter-spacing: .20rem; }
`;

export const WarranyNumber = styled.a`
  color: ${Blue};
  font-family: ${MainFont2};
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: .12rem;
  &:hover {
    color: #eb1c24;
  }
  @media(min-width: 768px) { 
    font-size: 1.8rem;
    letter-spacing: .15rem;
    }
`;

export const WarrantyTopper = styled.h3`
  font-family: ${MainFont1};
  text-shadow: ${TextShadow};
  background-color: ${Blue};
  padding: 20px; 
  line-height: 1.2rem;
  letter-spacing: .1rem;
  text-align: center;
  color: white; 
  @media(min-width:768px) {
    line-height: 1.8rem;
    letter-spacing: .18rem;
    font-size: 1.4rem;
    padding-left: 100px;
    padding-right: 100px;
  }
  @media(min-width: 1024px) { 
    padding-left: 140px;
    padding-right: 140px;
    font-size: 1.6rem; 
    line-height: 2.4rem;
    letter-spacing: .22rem;}
`

export const WarrantyWrapper = FlexCol.extend`
  justify-content: center;
`;

export const P = styled.p`
  font-family: ${MainFont2};
  text-indent: 25px;
  line-height: 1.35rem;
  padding-right: 8px;
  padding-left: 8px;
  margin-top: 10px;
  @media(min-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.8rem;
    padding-right: 17px;
    padding-left: 17px;
  }
  @media(min-width: 1024px) { 
    font-size: 1.6rem;
    line-height: 2.1rem;
    margin-bottom: 10px;
    padding-right: 25px;
    padding-left: 25px;
    padding-bottom: 15px;
    padding-top: 15px;
    }
`;

export const Heading = styled.h3`
  font-family: ${MainFont2};
  border-bottom: ${RedBorderBottom};
  padding-bottom: 5px;
  padding-left: 10px;
  margin-bottom: 8px;
  @media(min-width: 768px) {
    font-size: 1.7rem;
    padding-bottom: 8px;
  }
  @media(min-width: 1024px) {
    padding-top: 10px;
    margin-bottom: 20px;
    font-size: 1.8rem;
  }
`; 