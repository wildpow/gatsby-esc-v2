import styled, { keyframes } from "styled-components";
//Site Wide default values and styles

export const Blue = '#1565c0';
export const Red = '#eb1c24';
export const Border = '1px solid #eee';
export const RedBorderBottom = '4px solid #eb1c24';
export const TextShadow = '2px 2px 4px rgba(0, 0, 0, 0.2)';
export const BoxShadow = '0 10px 6px -6px rgba(119, 119, 119, .6)';
export const MainFont1 = `'Roboto', sans-serif`;
export const MainFont2 = `'Open Sans', sans-serif`;
export const Animation = `animation-duration: .5s; animation-fill-mode: both;`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: Row;
`;

export const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const H2 = styled.h2`
  font-family: ${MainFont1};
  text-shadow: ${TextShadow};
  background-color: ${props => props.red ? '#eb1c24' : '#1565c0'};
  
  text-align: center;
  color: white;
  margin: 0;
  font-size: .9rem;
  line-height: 1.1rem;
  letter-spacing: .08rem;
  padding: 12px 5px 12px 5px;
  @media(min-width: 768px) { 
    font-size: 1.4rem;
    padding-bottom: 16px;
    padding-top: 16px;
    line-height: 1.5rem;
    }
  @media(min-width: 1024px) { 
    font-size: 1.5rem;
    padding-bottom: 20px;
    padding-top: 20px;
    }
  @media(min-width: 1300px) { 
    font-size: 1.8rem; 
    letter-spacing: .1rem; 
    padding-right: 1px;
    padding-left: 1px;
    padding-top: 25px;
    padding-bottom: 25px;
    line-height: 1.8rem;
    }
`;
