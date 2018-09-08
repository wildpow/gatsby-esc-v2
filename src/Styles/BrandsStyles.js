import styled from 'styled-components';
import { Link } from 'gatsby'
import { FlexCol, Animation, FadeIn, MainFont1, Blue, MainFont2 } from './mainStyles';

export const Main = FlexCol.extend`
  /* margin-top: 15px; */
  animation-name: ${FadeIn};
  ${Animation}
  text-align: center;
  @media(min-width: 1022px) { 
    flex-direction: row; 
    justify-content: center;
    margin-top: ${props => props.MarginTop ? '15px' : '0'};
    }
`;

export const TempurImg = styled.img`
  color: white;
  width: 19rem;
  align-self: center;
  padding-top: 22px;
  @media(min-width: 360px) { width: 22rem; }
  @media(min-width: 768px) { max-width: 25rem; }
  @media(min-width: 1022px) { max-width: 20rem; margin: auto; padding-top: 0px; }
`;

export const StearnsImg = styled.img`
  color: white;
  align-self: center;
  width: 14rem;
  padding-top: 30px;
  padding-bottom: 15px;
  @media(min-width: 360px) { width: 17rem; }
  @media(min-width: 1022px) { max-width: 15rem; padding-top: 50px; }
`;

export const SealyImg = styled.img`
  color: white;
  align-self: center;
  width: 9.1rem;
  height: 10rem;
  padding-top: 20px;
  padding-bottom: 15px;
  @media(min-width: 360px) { 
    width: 12rem;
    height: 12rem;
  }
  @media(min-width: 1022px) {
    width: 10rem;
    height: 10rem;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const MainText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  font-size: 1.1rem;
  line-height: 1.5rem;
  @media(min-width: 360px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

export const Footer = styled.p`
  font-family: ${MainFont1};
  background-color: ${Blue};
  margin-bottom: 0;
  padding: 10px 0 10px 0;
  color: white;
  border-top: 2px solid black;
  letter-spacing: .12rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
`;
export const StyledLink = styled(Link)`
  font-family: ${MainFont2};
  text-decoration: none;
  flex-basis: 100%;
  color: black;
  border: 2px solid black;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
  border-radius: .11rem;
  margin-bottom: 20px;
  display: flex;
  transition: all .25s ease-in-out;
  &:hover { transform: scale(1.01); }
  @media(min-width: 1022px) {
    margin: 0 auto;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }
`;

export const BrandWrapper = FlexCol.extend`
  justify-content: space-around;
  @media(min-width: 1022px) { justify-content: space-between; }
`;

export const StearnsWrapper = StyledLink.extend`
  @media(min-width: 1022px) { margin-right: 10px; margin-left: 10px; }
`;