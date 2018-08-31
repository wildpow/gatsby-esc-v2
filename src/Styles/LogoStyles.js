import styled from 'styled-components';
import { Link } from 'gatsby'
import {Red, Blue, FlexCol, MainFont1,
  TextShadow} from './MainStyles';

export const Wrapper = FlexCol.extend`
  margin-top: -15px;
  @media (min-width: 768px) { margin-top: -22px; }
  @media (min-width: 1022px) { margin-top: -85px; }
  @media (min-width: 1300px) { margin-top: -90px; }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-top: -15px;
  margin: auto;
  transition: all .20s ease-in;
  &:hover { transform: scale3d(1.05,1.05,1); }
`;

export const Image = styled.img`
  color: white;
  transition: all .25s ease-in; 
  align-self: center;
  height: 6.5em;
  @media (min-width: 500px) { height: 8em; }
  @media (min-width: 768px) { height: 11em; }
`;

export const H1 = styled.h1`
  font-family: ${MainFont1};
  color: ${Red};
  text-shadow: ${TextShadow};
  transition: all .25s ease-in;
  z-index: -1;
  align-self: center;
  margin-bottom: 0;
  border: 2px solid black;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
  border-top-left-radius: .11rem;
  border-top-right-radius: .11rem;
  padding: 5px 15px 5px 15px;
  font-size: 1.7rem;
  margin-top: -26px;
  @media(min-width: 360px) { font-size: 1.8rem; }
  @media (min-width: 500px) { font-size: 2.5rem; margin-top: -32px; }
  @media (min-width: 768px) { font-size: 4rem; margin-top: -44px; }
`
export const Span = styled.span`
  color: ${Blue};
  font-style: italic;
`