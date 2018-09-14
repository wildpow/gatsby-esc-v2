import styled from 'styled-components';
import { Blue, Red, MainFont2 } from '../../../styles/mainStyles';

export const MakeOfferContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MakeOfferButton = styled.button`
  background-color: ${Blue};
  border-radius: 4px;
  border: 1px solid #ccc;
  color: white;
  display: block;
  font-family: ${MainFont2};
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transform-style: flat;
  transition: all ease 0.3s;
  letter-spacing: .18rem;
  font-size: .8rem;
  width: 120px;
  margin: 0px 5px 1px 0px;
  padding: 5px;
  &:active {
    box-shadow: 0 3px 0 #ccc;
    top: 3px;
    outline: none;
  }
  &:hover:enabled{
    background-color: ${Red};
    color: white;
    cursor: pointer !important;
  }
  &:active:enabled{
    background: ${Blue} !important;
    box-shadow: inset 0px 0px 5px #c1c1c1 !important;
    outline: none;
  }
  @media(min-width: 360px) { width: 130px; }
  @media(orientation: landscape) and (max-width: 568px) { width: 160px; }
  @media(orientation: landscape) and (min-width: 569px) { width: 180px; padding: 7px;}
  @media(orientation: landscape) and (min-width: 811px) { 
    width: 220px; 
    padding: 10px; 
    font-size: 1.2rem;
  }
  @media(min-width: 768px) and (orientation: portrait){
    width: 260px;
    letter-spacing: .25rem;
    font-size: 1.4rem;
    margin: 5px auto;
    padding: 10px;
    align-self: flex-end;
    margin-right: 5px;
  }
  @media(min-width: 1024px) { align-self: center; margin: 5px 35px 5px 5px;}
  @media(min-width: 1300px) { font-size: 1.7rem; margin: 5px 35px 5px 5px; width: 300px; }
`;

export const MakeOfferSpan = styled.span`
  display: none;
  @media(orientation: landscape) {
    display: initial;
  }
  @media(min-width: 768px) {
    display: initial;
  }
`;