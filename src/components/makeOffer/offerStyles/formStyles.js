import styled from 'styled-components';
import { MainFont2, Red, Blue } from '../../../styles/mainStyles';

export const Form = styled.form`
  padding: 10px 15px 5px 15px;
  font-family: ${MainFont2};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media(min-width: 360px) and (orientation: portrait) {
    margin-top: 20px;
  }
  @media(orientation: landscape) { 
    padding: 2px 15px 2px 15px;
  }
  @media(orientation: landscape) and (min-width:640px){
    padding: 0px 15px 5px 15px;
    margin-top: 4px;
  }
  @media (min-width: 730px) and (orientation: landscape) {
    padding: 10px 15px 5px 15px;
    }
  @media(min-width: 767px) and (orientation: portrait) {
    margin-top: 0px;
  }
  @media(min-width: 811px) and (orientation: landscape) {
    padding-top: 0px;
    padding-bottom: 2px;
  }
    @media (min-width: 1024px) {
      font-size: 1.2rem;
    }
`;

export const Input = styled.input`
  outline: none;
  background: transparent;
  border: none;
  margin-bottom: 10px;
  border-bottom: 2px solid #ddd;
  font-family: ${MainFont2} !important;
  font-size: 1.2rem;
  padding: 7px;
  margin-bottom: 10px;
  &:focus {
    border-bottom: 2px solid ${Blue};
  }
  &:invalid {
      color: ${Red};
      
    }
  ::-webkit-input-placeholder {
    color: rgba(112, 98, 89, .25);
    font-family: ${MainFont2};
    }
  ::-moz-input-placeholder {
    color: rgba(112, 98, 89, .25);
    font-family: ${MainFont2};
  }
  @media(orientation: landscape) {
    margin-bottom: 0px;
    padding: 3px;
  }
  @media(min-width: 767px) and (orientation: portrait) {
    font-size: 1.3rem;
  }
  @media(min-width: 360px) and (max-height: 900px) {
    font-size: 1rem;
    padding: 6px;
  }
  @media(min-width:700px) and (orientation: landscape) {
    font-size: 1.2rem;
    padding: 10px;
  }
  
  @media(min-width: 1300px) {
    padding: 10px;
  }
`;

export const TextArea = styled.textarea`
  outline: none;
  background: transparent;
  border: none;
  font-family: ${MainFont2} !important;
  margin-bottom: 20px;
  font-size: 1.2rem;
  border-bottom: 2px solid #ddd;
  padding-bottom: 20px;
  resize:none;
  overflow: hidden;
  &:focus {
    border-bottom: 2px solid ${Blue};
  }
  &:invalid {
      color: ${Red}; 
    }
    ::-webkit-input-placeholder {
    color: rgba(112, 98, 89, .25);
    font-family: ${MainFont2};
    }
  ::-moz-input-placeholder {
    color: rgba(112, 98, 89, .25);
    font-family: ${MainFont2};
  }
  @media(orientation: landscape) {
    font-size: 1rem;
    margin-bottom: 3px;
    padding-bottom: 2px;
  }
  @media(orientation: landscape) and (min-width:640px){
    margin-bottom: 10px;
    }
  @media (min-width: 730px) and (orientation: landscape) {
    margin-bottom: 10px;
    padding: 8px;
    font-size: 1.2rem;
  }
  @media (min-width: 812px) and (orientation: landscape) {
    margin-bottom: 5px;
    padding-bottom: 0px;
  }
  @media (min-width: 768px) and (min-height:823px) and (orientation: portrait) {
    font-size: 1.3rem;
    margin-bottom: 7px;
  }
  @media(min-width: 1024px) {
    font-size: 1.2rem;
    height: 70px;
    margin-bottom: 10px;
    
  }
  @media(min-width: 1024px) and (min-height: 920px) and (orientation: portrait) {
    margin-bottom: 17px;
  }
`;

export const SubmitButton = styled.button`
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
  font-size: 1rem;
  width: 120px;
  margin: 0px;
  padding: 10px;
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
  @media (min-width: 768px) and (min-height:823px) and (orientation: portrait) {
    font-size: 1.6rem;
    width: 140px;
  }
  @media (min-width: 1024px) {
    font-size: 1.6rem;
    width: 140px;
  }
`;