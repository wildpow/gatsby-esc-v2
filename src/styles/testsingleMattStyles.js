import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components';
import Markdown from 'react-markdown';
import {Red, Blue, FlexCol, FlexRow, MainFont1, MainFont2,
  TextShadow, FadeIn, Border, BoxShadow, Animation,
  RedBorderBottom, H2} from './mainStyles';

export const PriceList = styled.ul`
  font-size: .3rem;
`;

export const Wrapper = FlexCol.extend`
  border: ${Border};
  box-shadow: ${BoxShadow};
  animation-name: ${FadeIn};
  ${Animation}
  justify-content: center; 
  border-radius: .11rem;
  @media(min-width: 1300px) {
    margin-right: 85px;
    margin-left: 85px;
  }
`;

export const Main = FlexRow.extend`
  margin-top: 2px;
  justify-content: space-around;
  @media(min-width: 360px) { margin-top: 4px }
  @media(min-width: 768px) { margin-bottom: 10px; }
  @media(min-width: 1024px) { 
    justify-content: space-evenly;
    margin-left: 5px; 
    margin-bottom: 10px;}
`;

export const MainInfo = FlexCol.extend`
  justify-content: space-around;
`;

export const PriceWrapper = FlexCol.extend`
  justify-content: center;
  flex-wrap: wrap;
  @media(min-width: 1028px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const MainTitle = H2.extend`
  @media(min-width: 768px) {
    text-align: left;
    padding-left: 20px;
  }
  @media(min-width: 1300px) {
    padding-left: 30px;
  }
`;

export const MainImg = styled.img`
  max-width: 7rem;
  @media(min-width: 768px) {
    max-width: 14rem;
  }
  @media(min-width: 1024px) {
    max-width: 17rem;
  }
`;

export const Warranty = styled.p`
  font-family: ${MainFont2};
  text-align: center;
  font-size: .5rem;
  padding-right: 5px;
  padding-left: 5px;
  @media(min-width: 768px) {
    font-size: 1rem;
    padding-right: 20px;
    padding-left: 20px;
  }
  @media(min-width:1024px) {
    font-size: 1rem;
  }
`;

export const Description = styled.p`
  font-family: ${MainFont2};
  align-self: center;
  border-radius: .11rem;
  margin-left: 0px;
  margin-right: 0px;
  font-size: 1rem;
  padding: 5px 14px 10px 14px;
  line-height: 1.3rem;
  @media(min-width: 768px) {
    font-size: 1.1rem;
    padding-right: 40px;
    padding-left: 40px;
    line-height: 1.5rem;
  }
  @media(min-width: 1022px) {
    font-size: 1.8rem;
    padding-right: 60px;
    padding-left: 60px;
    line-height: 2.3rem;
  }
  @media(min-width: 1300px) {
    font-size: 1.7rem;
    padding-top: 30px;
    padding-right: 80px;
    padding-left: 80px;
    line-height: 2.35rem;
    margin: auto;
    padding-bottom: 20px;
  }
`;

export const Overview = styled.header`
  font-family: ${MainFont1};
  background-color: ${Red};
  text-shadow: ${TextShadow};
  color: white;
  letter-spacing: .1rem;
  text-align: center;
  font-size: .5rem;
  padding: 0px 12px 0px 12px;
  @media(min-width: 768px) {
    text-align: left;
    font-size: .9rem;
    padding: 0px 5px 0px 10px;
  }
  @media(min-width: 1024px) {
    text-align: center;
    font-size: 1.2rem;
  }
`;

export const Article = styled.article`
  display: flex;
  background: rgba(224,224,224,0.42);
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-left: 0px;
`
export const Profile = styled.p`
  font-family: ${MainFont2};
  margin-top: 0;
  font-size: .9rem;
  @media(min-width: 768px) { font-size: 1rem; }
  @media(min-width: 1024px) { font-size: 1.2rem; }
  @media(min-width: 1300px) { font-size: 1.4rem; }
`;
//692px
export const StyledMarkDown = styled(Markdown)`
  font-family: ${MainFont2};
  margin-left: 5px;
  padding: 0px;
  & p {
    font-size: .9rem;
    margin-top: 0;
    margin-bottom: 0;
    border-bottom: ${RedBorderBottom};
    padding-bottom: 2px;
  }
  & ul {
    list-style: square;
    margin-top: 2px;
    font-size:  .7rem;
    padding-left: 20px;
    margin-bottom: 5px;
  }
  & li {
    padding-bottom: 2px;
  }
  @media(min-width: 360px) {
    & ul {
      margin-top: 10px;
    }
  }
  @media(min-width: 550px) {
    font-family: ${MainFont2};
    padding: 0px 0px 0px 10px;

    & p {
      font-size: 1.8rem;
      margin-top: 0;
      margin-bottom: 0;
      border-bottom: ${RedBorderBottom};
      padding-bottom: 2px;
    }
    & ul {
      list-style: square;
      margin-top: 10px;
      font-size:  1rem;
    }
    & li {
      padding-bottom: 2px;
      font-size: 1.1rem;
    }
  }
  @media(min-width: 992px) {
    padding: 0px 30px 10px 30px;
    
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
      font-size: 1.8rem;
    }
  }
`;

export const Price = FlexCol.extend`
  margin-left: 10px;
  justify-content: center;
  justify-items: center;
  align-content: center;
`;

export const PriceTitle = styled.p`
  font-family: ${MainFont2};
  padding-top: 0px;
  padding-bottom: 3px;
  margin-top: 0;
  margin-bottom: 0px;
  font-size: .8rem;
  @media(min-width: 768px) {
    font-size: 1rem;
    padding-top: 0px;
    padding-bottom: 7px;
  }
  @media(min-width: 1022px) {
    font-size: 1.7rem;
    padding-left: 20px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
`;

export const Stuff = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoAnchor = styled(AnchorLink)`
  display: none;
  margin-left: 5px;
  padding-left: 15px;
  font-size: .9rem;
  font-family: ${MainFont2};
  color: ${Red};
  &:hover { color: ${Blue}; }
  @media (orientation: landscape) {
    display: block;
  }
  @media(min-width: 568px) {
    padding-left: 30px;
    font-size: 1rem;
  }
  @media(min-width: 768px) {
    display: block;
    font-size: 1.2rem;
  }
  @media(min-width: 1024px) { 
    padding-left: 55px;
    font-size: 1.6rem;
    
    }
`;
