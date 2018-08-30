import styled from 'styled-components';
import { Link } from 'gatsby'
import { FadeIn, Animation, MainFont1, TextShadow, Border,
          BoxShadow, FlexCol, MainFont2, Blue, Red } from './MainStyles';

export const Main = styled.div`
  animation-name: ${FadeIn};
  ${Animation}
  background-color: white;
  margin-right: auto;
  margin-left: auto;  
  margin-top: 15px;
  max-width: 980px;
`;

export const Linky = styled(Link)`
  margin: auto !important;
`
export const OneImg = styled.img`
  color: white;
  background-color: white;
  max-width: 980px;
  max-height: 450px;
  // @media(min-width: 768px) { max-width: 800px; max-height: 600px; }
  // @media(min-width: 1024px) { max-width: 1000px; height: 600px; }
`

export const Wrapper = FlexCol.extend`
  border-top: ${Border};
  border-right: ${Border};
  border-left: ${Border};
  box-shadow: ${BoxShadow};
  justify-content: center;
  margin-top: 10px;
  margin-right: 0px;
  margin-left: 0px;
  @media(min-width: 768px) { margin-top: 15px; }
  @media(min-width: 1300px) {
    margin-top: 15px;
  }
`;

export const Headline = styled.h2`
  font-family: ${MainFont1};
  text-shadow: ${TextShadow};
  text-align: center;
  background-color: ${props => props.red ? '#eb1c24' : '#1565c0'};
  color: white;
  margin: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  letter-spacing: .20rem;
  font-size: 1.2rem;
  @media(min-width: 412px) { letter-spacing: .25rem; font-size: 1.3rem; }
  @media(min-width: 768px) { letter-spacing: .23rem; font-size: 2.2rem; }
  @media(min-width: 1024px) { font-size: 2.5rem; }
`;

export const P = styled.p`
  font-family: ${MainFont2};
  text-align: justify;
  text-justify: inter-character !important;
  margin-bottom: 0;
  margin-top: 0;
  padding: 15px 7px 15px 7px;
  font-size: 1rem;
  line-height: 1.55rem;
  @media(min-width: 640px) {
    padding: 20px 15px 20px 15px;
    line-height: 1.8rem;
    font-size: 1.2rem;
  }
  @media(min-width: 768px) {
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
  @media(min-width: 1024px) {
    padding: 30px 65px 30px 65px;
    font-size: 1.8rem;
    line-height: 2.9rem;
  }
`;

export const Links = styled(Link)`
  color: ${Red};
  &:hover { color: ${Blue}; }
`;