import styled from 'styled-components';
import { MainFont2 } from '../../../styles/mainStyles';

export const Back = styled.div`
  position: absolute;
  cursor: pointer;
  width: 100%;
  z-index: 1000;
  height: 100%;
  backface-visibility: hidden;
  background: #FFFFFF;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
	-moz-transform: rotateY(180deg);
	-o-transform: rotateY(180deg);
	-ms-transform: rotateY(180deg);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column; 
  justify-content: space-between; 
  & p {
    padding: 15px 10px 15px 10px;
    margin-top: 0px;
    margin-bottom: 0px;
    line-height: 1.72rem;
    font-size: 1.1rem;
    text-align: justify;
    text-justify: inter-character;
    font-family: ${MainFont2};
    @media(orientation: landscape) { 
      padding: 2px 10px 2px 10px;
    }
    @media(orientation: landscape) and (min-width:640px){ 
      padding: 7px 10px 7px 10px;
    }
    @media (min-width: 768px) and (min-height:823px) and (orientation: portrait) {
      font-size: 1.3rem;
      line-height: 2.4rem;
      padding: 5px 18px 12px 18px;
    }
    @media (min-width: 1024px) {
      font-size: 1.3rem;
      line-height: 2.4rem;
      padding: 5px 18px 12px 18px;
    }
  }
  & img {
    max-width: 16rem;
    margin: 0px auto 8px auto;
  }
`;

///////////////////////////////////////////////////////////////////





