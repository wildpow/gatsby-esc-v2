import styled from 'styled-components';
import Markdown from 'react-markdown';
import { BoxShadow, FadeIn, Animation, Border, FlexCol,
        Blue, MainFont2 } from './mainStyles';

export const Main = FlexCol.extend`
  border: ${Border};
  box-shadow: ${BoxShadow}; 
  animation-name: ${FadeIn};
  ${Animation}
  padding-bottom: 20px;
  @media(min-width:1200px) { margin-left: 220px; margin-right: 220px; }
`;

export const BottomImg = styled.img`
  margin: auto;
  margin-top: 20px;
  max-width: 100%;
  @media(min-width: 1022px) { width: 100%; height: 100%; }
`;

export const Marker = styled(Markdown)`
  & ol {
    background-color: ${Blue};
    list-style-position: inside;
    color: white;
    padding-top: 10px;
    padding-bottom: 20px;
    }
  & li {
    font-family: ${MainFont2};
    margin: auto;
    padding-left: 12px;
    padding-right: 12px;
    line-height: 1.4rem;
    font-size: 1rem;
    padding-top: 10px;
    padding-bottom: 0px;
  }
  & p {
    font-family: ${MainFont2};
    padding-left: 12px;
    padding-right: 12px;
    line-height: 1.4rem;
    font-size: 1rem;
    text-indent: 30px;
    padding-top: 10px;
    padding-bottom: 0px;
  }
  & img {
    margin: auto;
    margin-top: 20px;
    max-width: 100%;
  }
  @media(min-width:768px) {
    & p {
      margin-bottom: 0;
      padding-right: 60px;
      padding-left: 60px;
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
    & li {
      text-align: center;
      margin-bottom: 0;
      padding-right: 60px;
      padding-left: 60px;
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }
  @media(min-width:1024px) {
    & ol {
      padding-top: 30px;
      padding-bottom: 30px;
    }
    & li {
      margin-bottom: 0;
      padding-right: 60px;
      padding-left: 60px;
      font-size: 1.6rem;
      line-height: 1.85rem;
      padding-bottom: 10px;
    }
    & p {
      margin-bottom: 0;
      margin-top: 10px;
      padding-right: 60px;
      padding-left: 60px;
      font-size: 1.6rem;
      line-height: 2.1rem;
      padding-bottom: 20px;
    }
    & img {
      width: 100%; height: 100%;
    }
  }
`;
