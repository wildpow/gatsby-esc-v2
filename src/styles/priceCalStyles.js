import styled from 'styled-components';
import {Blue, MainFont2, FlexCol, Red, Border } from './mainStyles';

export const DropDown = styled.select`
  color: white;
  cursor: pointer;
  background-color: ${Blue};
  font-family: ${MainFont2};
  width: 150px;
  @media(min-width: 360px) {
    width: 160px;
  }
  @media(min-width: 411px) {
    width: 180px;
  }
  @media(min-width: 567px) {
    width: auto;
    -moz-appearance: none;
    -webkit-appearance: none;
    outline: none;
    padding: 8px;
    border-radius: .18rem;
    line-height: 20px;
  }
  @media(min-width: 768px) {
    font-size: 1.2rem;
    padding: 10px;
    margin-bottom: 20px;
    line-height: 25px;
  }
  @media(min-width: 1024px) {
    margin-bottom: 30px;
    padding: 15px;
    font-size: 1.3rem;
    -moz-appearance: none;
    -webkit-appearance: none;
  } 
  @media(min-width: 1200px) {
    padding: 20px 20px 20px 20px;
  }
  @media(min-width: 1300px) {
    margin-bottom: 10px;
  }
`;
export const DropDownSize = DropDown.extend`
  @media(min-width: 567px) {
    padding-right: 123px;
  }
  @media(min-width: 768px) {
    padding-right: 143px;
  }
  @media(min-width: 1024px) {
    padding-right: 170px;
  } 
  
`

export const PriceTitle = styled.h4`
  margin-bottom: 2px;
  margin-top: 0px; 
  font-family: ${MainFont2};
  font-size: .9rem;
  @media(min-width: 567px) {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 1.1rem;
  }
  @media(min-width: 768px) {
    font-size: 1.3rem;
  }
  @media(min-width: 1024px) {
    font-size: 1.5rem;
  }
  @media(min-width: 1300px) {
    margin-top: 2px;
  }
`;

export const AddBoxTitle = styled.h4`
  font-size: .9rem;
  font-family: ${MainFont2};
  margin-top: 4px;
  margin-bottom: 2px;
  @media(min-width: 567px) {
    font-size: 1.1rem;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  @media(min-width: 768px) {
    font-size: 1.3rem;
  }
  @media(min-width: 1024px) {
    font-size: 1.5rem;
  }
  
`;
export const BeforeSalePrice = styled.h6`
  font-family: ${MainFont2};
  margin-top: 2px;
  margin-bottom: 0px;
  margin-right: 10px;
  text-decoration: line-through;
  text-decoration-color: ${Red};
  -webkit-text-decoration-color: ${Red};
  -moz-text-decoration-color: ${Red};
  text-align: right;
  @media(min-width: 360px) { margin-top: 4px;}
  @media(min-width: 567px) {
    margin-top: 8px;
    margin-left: 0px;
    font-size: 1rem;
  }
  @media(min-width: 768px) {
    font-size: 1.2rem;
  }
  @media(min-width: 1024px) {
    margin-right: 50px;
    font-size: 1.3rem;
    margin-bottom: 8px;
  }
  @media(min-width: 1200px) {
    margin-right: 70px;
  }
  @media(min-width: 1300px)  {
    margin-right: 35px;
  }
`

export const Total = styled.h4`
  margin-top: 0px;
  margin-right: 10px;
  font-family: ${MainFont2};
  margin-bottom: 2px;
  font-size: 1rem;
  text-align: right;
  @media(min-width: 567px) {
    font-size: 1.5rem;
  }
  @media(min-width: 768px) {
    font-size: 1.8rem;
  }
  @media(min-width: 1024px) {
    margin-right: 50px;
    font-size: 2.2rem;
  }
  @media(min-width: 1200px) {
    margin-right: 70px;
  }
  @media(min-width: 1300px)  {
    margin-right: 35px;
  }
`;

export const Wrapper = FlexCol.extend`
  margin-left: 5px;
  justify-content: center;
  @media(min-width: 1024px) {
    margin-left: 25px;
    margin-top: 10px;
    border-left: ${Border};
  }
  @media(min-width: 1300px) {
    margin-top: 0px;
  }
`;

export const DropDownWrapper = styled.div`
  align-self: center;
`;