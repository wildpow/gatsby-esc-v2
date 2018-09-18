import { Link } from 'gatsby'
import styled from 'styled-components';

export const InfoWrapper = styled.div`
  margin-left: 10px;
  @media(min-width: 640px) { margin-left: 24px; }
`;

export const StyledLink = styled(Link)`
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 5px;
  text-decoration: none;
  border: 2px solid black;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
  border-radius: .14rem;
  background-color: white;
  color: #1565c0;
  transition: all .15s ease-in-out;
  &:hover { z-index: 999; transform: scale3d(1.02,1.02,1); }
`;

export const Img = styled.img`
  color: white;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
  @media(min-width: 1022px) { max-height: 150px; max-width: 150px; }
`;

export const H3 = styled.h3`
  text-align: center;
  margin: 0 auto;
  padding-right: 10px;
  overflow-wrap: break-word;
  font-size: 1rem;
  @media(min-width: 765px) { font-size: 1.3rem; }
  @media(min-width: 1022px) { font-size: 2rem; }
`;