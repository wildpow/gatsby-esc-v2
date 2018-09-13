import styled from 'styled-components';
import { MainFont2, MainFont1, TextShadow, Red, Animation, FadeIn } from './mainStyles';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid black;
  border-radius: .11rem;
  background-color: #f6f5f2;
  margin-top: 10px;
`;

export const Header = styled.header`
  margin-top: 7px;
  align-self: center;
  @media(min-width: 360px) { margin-top: 12px; }
  @media(min-width: 768px) { margin-top: 10px; }
  @media(min-width: 1024px) { margin-top: 15px; margin-bottom: 10px; }
  @media(min-width: 1300px) { margin-top: 20px; margin-bottom: 20px; }
`;

export const MainLogo = styled.img`
  max-width: 280px;
  margin: 0 auto;
  @media(min-width: 768px) { max-width: 450px; }
  @media(min-width: 1024px) { max-width: 550px; }
  @media(min-width: 1300px) { max-width: 600px; }
`;

export const LGWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media(min-width: 1300px) { justify-content: space-between; }
`;

export const FirstImg = styled.img`
  align-self: center;
  display: none;
  @media(min-width: 768px) { display: block; max-width: 375px; }
  @media(min-width: 1024px) { max-width: 450px; }
  @media(min-width: 1200px) { max-width: 550px; }
  @media(min-width: 1300px) { max-width: 650px; }
`;

export const Headline = styled.p`
  text-indent: 15px;
  line-height: 1.25rem;
  letter-spacing: .1rem;
  padding-left: 15px;
  padding-right: 5px;
  margin-bottom: 3px;
  margin-top: 5px;
  color: #706259;
  word-break: break-word;
  font-family: ${MainFont2};
  &::first-letter {
    font-size: 140%;
  }
  @media(min-width: 360px) {
    margin-top: 10px;
    margin-bottom: 6px;
    line-height: 1.35rem;
  }
  @media(min-width: 1200px) {
    font-size: 1.3rem;
    line-height: 2rem;
    text-align: ${props => props.bottom ? 'justify' : 'auto'};
    text-justify: ${props => props.bottom ? 'inter-character' : 'auto'};
    padding-left: ${props => props.bottom ? '0px' : '15px'};
    padding-right: ${props => props.bottom ? '0px' : '5px'};
    letter-spacing: ${props => props.bottom ? 'auto' : '.1rem'}
  }
`;

export const MainHeadline = Headline.extend`
  @media(min-width: 1024px) {
    line-height: 2rem;
    font-size: 1.4rem;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const FlexWrapper = styled.main`
  display: flex;
  flex-direction: column;
  font-size: .9rem;
  @media(min-width: 360px) { font-size: 1rem; }
  @media(min-width: 768px) { flex-direction: row; }
`;

export const Icon = styled.img`
  max-width: 50px;
  align-self: center;
  @media(min-width: 768px) {
    max-width: 220px;
  }
  @media(min-width: 1200px) {
    margin-bottom: 20px;
    max-width: 250px;
  }
`;

export const FormWrapper = styled.div`
  padding-top: 5px;
  background-color: #f6f5f2;
  @media(min-width: 1300px) { margin-bottom: 60px; }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f6f5f2;
  color: #706259;
`;

export const LabelWrapper = styled.div`
  margin-top: ${props => props.TopM ? '2px' : '0px'};
  display: flex;
  margin-bottom: 4px;
  flex-direction: row;
  @media(min-width: 360px) {
    margin-top: ${props => props.TopM ? '6px' : '0px'};
    margin-bottom: 8px;
  }
`;

export const Label = styled.label`
  padding: 5px;
  text-align: left;
  color: #706259;
  width: 70px;
  font-family: ${MainFont1};
  margin-left: 5px;
  @media(min-width: 360px) { font-size: 1rem; }
  @media(min-width: 1024px) { font-size: 1.6rem; width: 100px; }
`;

export const Button = styled.button`
  position: relative;
  display: block;
  width: 250px;
  margin: 5px auto;
  padding: 10px;
  background-color: #706259;
  border: 1px solid #ccc;
  font-family: ${MainFont2};
  letter-spacing: .25rem;
  color: #f6f5f2;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transform-style: flat;
  transition: all ease 0.3s;
  &:active {
  box-shadow: 0 3px 0 #ccc;
  top: 3px;
  outline: none;
  }
  &:hover:enabled{
    background-color: #f6f5f2;
    color: #706259;
  }
  &:active:enabled{
    background: #e5e5e5 !important;
    box-shadow: inset 0px 0px 5px #c1c1c1 !important;
    outline: none;
  }

  @media(min-width: 360px) { width: 300px; }
  @media(min-width: 1300px) { font-size: 1.7rem; }
`;

export const Input = styled.input`
  width: 70%;
  font-family: ${MainFont2} !important;
  &:focus {
    outline: none;
    border: 2px solid #706259;
  }
  ::-webkit-input-placeholder {
    color: rgba(112, 98, 89, .25);
    font-family: ${MainFont2};
    }
  ::-moz-input-placeholder {
    color: rgba(112, 98, 89, .25);
    font-family: ${MainFont2};
  }
  
  @media(min-width: 360px) {
    font-size: 1rem;
    padding: 6px;
  }
  @media(min-width: 1300px) {
    padding: 10px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f6f5f2;
`;

export const Row = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #f6f5f2;
  @media(min-width: 768px) {
    margin-top: 20px;
    flex-direction: row;
  }
  @media(min-width: 1200px) { justify-content: space-around; }
`;

export const Holder = styled.aside`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.Cream ? '#f6f5f2' : 'white'};
  @media(min-width: 768px) {
    flex-basis: 40%;
    width: ${(props) => props.Last ? '80%' : 'auto'};
    margin: ${props => props.Last ? '0 auto' : '10px 0 5px 0'};
  }
  @media(min-width: 1200px) {
    flex-basis: 30%;
    width: ${(props) => props.Last ? '38%' : 'auto'};
  }
  & h3 {
    margin: 0;
    text-align: center;
    color: #706259;
    font-size: 1.3rem;
    letter-spacing: .1rem;
    font-variant: small-caps;
    font-family: ${MainFont2};
    @media(min-width: 1024px) {
      font-size: 1.8rem;
    }
  } 
`;

export const BottomWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-content: center;
  @media(min-width: 1024px) { margin-top: 15px; }
  & h3 {
    background-color: #f6f5f2;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    color: #706259;
    text-shadow: ${TextShadow};
    font-size: 1.3rem;
    letter-spacing: .1rem;
    font-variant: small-caps;
    font-family: ${MainFont2};
    @media(min-width: 1024px) { font-size: 2.5rem; }
  }
`;

export const BottomImgWrapper = styled.div`
  background-color: #706259;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const BottomImg = styled.img`
  max-width: 290px;
  padding: 10px 0 10px 0;
  margin: 0 auto;
  position: relative;
  @media(min-width: 360px) { max-width: 100%; }
`;

export const RatingsWrap = styled.div`
  text-align: center;
  text-shadow: ${TextShadow};
  color: #f6f5f2;
  background-color: #706259;
  font-family: ${MainFont2};
`;

export const StarImg = styled.img`
  max-width: 150px;
  align-self: center;
  @media(min-width: 1024px) { max-width: 350px; }
`;

export const Ratings = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.Bottom ? '16px' : '0'};
  & p {
    margin-bottom: 5px;
    letter-spacing: .07rem;
    line-height: 1.4rem;
    padding-left: 5px;
    padding-right: 5px;
    @media(min-width: 1024px) { font-size: 1.7rem; line-height: 2.4rem; }
}
`;

export const FooterWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: #f6f5f2;
  & p {
    background-color: #f6f5f2;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    color: #706259;
    font-size: 1.3rem;
    letter-spacing: .1rem;
    font-variant: small-caps;
    font-family: ${MainFont2};
  }
`

export const CallTOAction = styled.p`
  margin-top: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
  padding-left: 5px;
  text-align: center;
  text-shadow: ${TextShadow};
  color: #f6f5f2;
  background-color: #706259;
  margin-bottom: 0;
  line-height: 1.4rem;
  font-family: ${MainFont2};
  @media(min-width: 360px) {
    padding-top: 7px;
    padding-bottom: 7px;
    line-height: 1.45rem;
  }
  @media(min-width: 1024px) {
    font-size: 1.4rem;
    line-height: 1.8rem;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-right: 10px;
    padding-left: 10px;
  }
  @media(min-width: 1300px) {
    line-height: 2.2rem;
    padding-top: 25px;
    letter-spacing: .27rem;
    padding-bottom: 25px;
`;

export const MapInfo = styled.div`
  color: #706259;
  display: flex;
  flex-direction: column;
  font-variant: small-caps;
  font-family: ${MainFont1};
  & h3 {
    margin-bottom: 1px;
    margin-top: 2px;
    @media(min-width:768px) { font-size: 2rem; }
    @media(min-width:1024px) { font-size: 2.1rem; }
  }
  & a {
    color: #706259;
    padding-top: 4px;
    padding-bottom: 4px;
    font-size: 1rem;
    @media(min-width:768px) { font-size: 1.4rem; }
    @media(min-width:1024px) { font-size: 1.6rem; letter-spacing: .2rem; }
    &:hover {
      color: ${Red} !important;
    }
  }
`;

export const ModalBox = styled.div`
  animation-name: ${FadeIn};
  ${Animation}
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #706259;
  margin-left: 6px;
  margin-right: 6px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  background: #f6f5f2;
  color: #706259;
  font-family: ${MainFont2};
  @media(min-width: 768px) { padding: 40px; }
  @media(min-width: 768px) { padding: 60px; }
  & h3 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    font-size: 2rem;
    margin-bottom: 5px;
    margin-top: 10px;
    @media(min-width: 768px) { font-size: 2.8rem; }
  }
  & p {
    text-align: center;
    margin-top: 5px;
    @media(min-width: 768px) {
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
  }
`;

export const ModalContainer = styled.div`
  /* background-color: rgba(0,0,0,0.5); */
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* transition: 3s; */
  /* overflow: hidden; */

`;

export const ModalButton = Button.extend`
  @media(min-width: 768px) {
    font-size: 2rem;
  }
`;


/* export const Button2 = styled.button`
  text-decoration: none;
  outline: none;
  cursor: pointer;
  color: #f6f5f2;
  font-variant: small-caps;
  background-color: #706259;
  padding: 5px;
  text-shadow: ${TextShadow};
  letter-spacing: .1rem;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 7px;
  border: 1px solid black;
  font-family: ${MainFont1};
  transition: all .25s ease-in;
  &:active {
    background: #e5e5e5 !important;
    box-shadow: inset 0px 0px 5px #c1c1c1 !important;
    outline: none;
  }
  &:hover {
    transform: scale3d(1.02,1.02,1);
  }
  @media(min-width: 360px) {
    margin-top: 5px;
    font-size: 1.2rem;
    padding: 7px;
    letter-spacing: .2rem;
  }
  @media(min-width: 1024px) {
    font-size: 2rem;
    padding: 15px;
    letter-spacing: .3rem;
  }
`; */