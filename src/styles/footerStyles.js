import styled from 'styled-components';
import { Link } from 'gatsby'
import { BoxShadow, Border, FlexRow, FlexCol, MainFont2,
          Red, Blue} from './mainStyles.js';

export const MainFooter = styled.footer`
  margin-top: 15px;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  @media (min-width: 1024px) {
    margin-top: 20px;
  }
`;

export const Wrapper = styled.div`
  box-shadow: ${BoxShadow};
  border: ${Border};
  margin: 0 auto;
  padding-top: 5px;
  background-color: white;
  @media(min-width: 1200px) {
    max-width: 100%;
    padding-right: 20px;
    padding-left: 20px;
    margin-left: 220px;
    margin-right: 220px;
  }
`;
const ImgHover = styled.img`
  color: white;
  transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;
export const Social = FlexRow.extend`
  justify-content: center;
  padding: 7px 7px 4px 7px;
  background-color: ${(props) => props.Red ? Red : 'white'};
`;

export const FBimage = ImgHover.extend`
  max-width: 3rem;
  @media(min-width: 360px) { max-width: 3.5rem; }
`;

export const Timage = ImgHover.extend`
  max-width: 3.7rem;
  padding-left: 10px;
  @media(min-width: 360px) { max-width: 3.5rem; }
`;

export const InstaImg = ImgHover.extend`
  max-width: 3.2rem;
  margin-left: 10px;
  @media(min-width: 360px) { max-width: 3.5rem; }
`;

export const MapsImg = ImgHover.extend`
  max-width: 3.2rem;
  margin-left: 10px;
  @media(min-width: 360px) { max-width: 3.5rem; }
`;

export const GraphImg = ImgHover.extend`
  display: inline-block;
  margin-left: 10px;
`;

export const YelpHolder = styled.div`
  background-color: #d32323;
  margin-left: 10px;
  border-radius: .2rem;
  transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;

export const YelpImg = styled.img`
  color: white;
  width: 3.3rem;
  max-height: 2.9rem;
  @media(min-width: 360px) { width: 3.54rem; max-height: 3.15rem;}
`;

export const GraphLink = styled.a`
  display: block;
  padding-top: 5px;
  @media(min-width:500px) { padding-top: 0px;}
`;

export const Contact = FlexRow.extend`
  justify-content: space-around;
  justify-content: space-evenly;
  margin-top: 10px;
  margin-bottom: 10px;
`;


export const Hours = FlexCol.extend`
  font-family: ${MainFont2};
  text-align: center;
  font-size: 1rem;
  width: 160px;
  @media(orientation: landscape) {
    width: 200px;
  }
  @media (min-width: 768px) { font-size: 1.3rem; width: 250px;}
  @media (min-width: 1024px) { font-size: 1.5rem;}
`;

export const HoursPara = styled.p`
  margin-top: 4px;
  margin: 0;
  font-variant: small-caps;
`

export const HoursSpan = styled.span`
  text-decoration: underline;
  padding-bottom: 5px;
`;

export const MapLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${Red};
    -webkit-text-decoration-color: ${Red};
    -moz-text-decoration-color: ${Red};
  }
`;

export const Divy = FlexRow.extend`
  justify-content: center;
  margin-top: 20px;
  @media(min-width: 768px) { margin-top: 30px; }
`;

export const BottomLinkWrapper = FlexCol.extend`
  font-family: ${MainFont2};
  line-height: 1.7rem;
  justify-content: space-around;
  margin-bottom: 15px;
  margin-top: 5px;
  text-align: center;
  @media(min-width:640px) { flex-direction: row; }
  @media(min-width: 1024px) { font-size: 1.3rem;}
`;

export const BottomLinks = styled(Link)`
  color: ${Red};
  &:hover { color: ${Blue}; }
`;

export const BBBLink = styled.a`
  display: none;
  
  @media(orientation: landscape) {
    display: flex;
    justify-content: center;
    width: 100px;
  }
  @media(min-width: 600px) {
    width: 200px;
    display: flex;
    justify-content: center;
    transition: all .25s ease-in;
    &:hover {
      transform: scale3d(1.1,1.1,1);
    }
  }
  & img {
    max-width: 5rem;
  }
`;
export const BottomBBLink = styled.a`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 300px;
  @media(orientation: landscape) {
    display: none;
  }
  @media(min-width: 600px) {
    display: none;
  }
  & img {
    max-width: 10rem;
  }
`;
export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;