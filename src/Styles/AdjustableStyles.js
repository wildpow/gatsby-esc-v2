import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Link } from 'gatsby'
import {Animation, FadeIn, FlexCol, BoxShadow, Border, TextShadow,
  FlexRow, RedBorderBottom, MainFont2, MainFont1, Blue} from './MainStyles';

export const AdjMarkdown = styled(ReactMarkdown)`
  font-family: ${MainFont1};
  padding: 30px;
  display: none;
  & p {
    border-bottom: ${RedBorderBottom};
    font-size: 1.6rem;
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 2px;
  }
  & ul {
    list-style: square;
    margin-top: 10px;
    font-size:  1rem;
  }
  & li {
    padding-bottom: 2px;
  }
    @media(min-width: 568px) {
      font-family: ${MainFont2};
      display: block;
      padding: 30px;

      & p {
        border-bottom: ${RedBorderBottom};
        font-size: 1.6rem;
        margin-top: 0;
        margin-bottom: 0;
        padding-bottom: 2px;
      }
      & ul {
        list-style: square;
        margin-top: 10px;
        font-size:  1rem;
      }
      & li {
        padding-bottom: 2px;
        font-size: .9rem;
      }
    }
    @media(min-width: 992px) {
      padding: 30px;
    
      & p {
        font-size: 2.4rem;
        margin-top: 0;
        margin-bottom: 0;
        padding-bottom: 2px;
      }
      & ul {
        margin-top: 10px;
        font-size:  1.8rem;
      }
      & li {
        padding-bottom: 2px;
        font-size: 1.4rem;
      }
    }
`;

export const Main = FlexCol.extend`
  animation-name: ${FadeIn};
  ${Animation}
  margin-left: 0px;
  margin-right: 0px;
  @media(min-width: 1022px) {
    margin-top: ${props => props.MarginTop ? '15px' : '0'};
  }
  @media(min-width:1200px) { margin-left: 120px; margin-right: 120px; }
`;

export const StyledLink = styled(Link)`
  box-shadow: ${BoxShadow};
  border: ${Border}; 
  text-decoration: none;
  margin-left: 2px;
  margin-right: 2px;
  color: black;
  margin-bottom: 20px;
  border-radius: .14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all .15s ease-in-out;
  background-color: white;
  &:hover {
    z-index: 999;
    transform: scale3d(1.02,1.02,1);
  }
`;

export const H3 = styled.h3`
  text-shadow: ${TextShadow};
  font-family: ${MainFont1};
  background-color: ${Blue};
  color: white;
  margin-top: 0;
  text-align: center;
  margin-bottom: 0;
  font-size: 1rem;
  padding: 10px 5px 10px 5px;
  letter-spacing: .12rem;
  @media(min-width: 581px) {
    font-size: 1.2rem;
    padding: 10px 30px 10px 30px;
  }
  @media(min-width: 692px) {
    text-align: left;
    word-spacing: .18rem;
    letter-spacing: .17rem;
  }
`;

export const InfoWrapper = FlexRow.extend`
  justify-content: space-around;
  @media(min-width: 1024px) {
    justify-content: space-evenly;
  }
`;

export const Img = styled.img`
  color: white;
  width: 240px;
  height: 240px;
  align-self: center;
  @media(min-width: 991px) {
    width: 350px;
    height: 350px;
    align-self: center;
    margin-left: 20px; 
  }
`;