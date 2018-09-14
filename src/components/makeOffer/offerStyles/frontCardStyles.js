import styled from 'styled-components';
import { Red, Blue, TextShadow, MainFont2, MainFont1 } from '../../../styles/mainStyles';

export const Front = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #FFFFFF;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  & p {
    padding: 7px 10px 7px 10px;
    margin-top: 0px;
    margin-bottom: 0px;
    line-height: 1.32rem;
    font-size: .9rem;
    text-align: justify;
    text-justify: inter-character;
    font-family: ${MainFont2};
    border-bottom: 4px solid ${Red};
    @media(orientation: landscape) { 
      padding: 2px 10px 2px 10px;
      border-bottom: 2px solid ${Red};
    }
    @media(orientation: landscape) and (min-width:640px){ 
      padding: 7px 10px 7px 10px;
      border-bottom: 4px solid ${Red};
    }
    @media (min-width: 768px) and (min-height:823px) and (orientation: portrait) {
      font-size: 1.2rem;
      line-height: 1.8rem;
      padding: 5px 18px 12px 18px;
    }
    @media (min-width: 1024px) {
      font-size: 1.2rem;
      line-height: 1.8rem;
      padding: 5px 18px 12px 18px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  font-family: ${MainFont1};
  background: ${Blue};
  color: white;
  & h3 {
    padding: 15px 15px 15px 15px;
    font-size: 1.2rem;
    letter-spacing: .2rem;
    margin: 0;
    text-shadow: ${TextShadow};
    @media (min-width: 768px) and (min-height:823px) and (orientation: portrait) {
    font-size: 1.7rem;
    letter-spacing: .3rem;
    padding-left: 25px;
    }
    @media (min-width: 1024px) {
      font-size: 1.7rem;
      letter-spacing: .3rem;
      padding-left: 25px;
    }
  }
  & button {
    position: absolute;
    overflow: hidden;
    border: 0;
    color: white;
    outline: none;
    background-color: ${Blue};
    top: 0.1rem;
    right: 0.3rem;
    padding: 0.3rem;
    font-size: 2.2em;
    height: 1em;
    width: 1.3em;
    text-indent: 10em;
    cursor: pointer;
    transition: all ease 0.3s;
    @media (min-width: 768px) and (min-height:823px) and (orientation: portrait) {
      font-size: 2.8rem;
    }
    @media (min-width: 1024px) {
      font-size: 2.8rem;
    }
    &:hover {
      color: ${Red};
    }
    &::after {
      position: absolute;
      line-height: 0.5;
      top: 0.45em;
      left: 0.5em;
      text-indent: 0;
      content: "\00D7"; 
      @media (min-width: 768px) and (min-height:823px) and (orientation: portrait) {
        top: 0.35em;
        left: 0.45em;
      }
      @media (min-width: 1024px) {
        top: 0.35em;
        left: 0.45em;
      }
    }
`;
