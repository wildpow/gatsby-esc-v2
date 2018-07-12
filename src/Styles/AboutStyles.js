import styled from 'styled-components';
import { Animation, FadeIn, FlexCol, FlexRow, MainFont1,
  MainFont2, Blue, Red, TextShadow } from '../Styles/MainStyles'; 

export const Main = FlexCol.extend`
  animation-name: ${FadeIn};
  ${Animation}
  margin-top: 15px;
  border: 2px solid black;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
  @media(min-width:1200px) { margin-left: 10px; margin-right: 10px; }
`;

export const PicHolder = FlexRow.extend`
  justify-content: space-between;
  @media(min-width: 640px) { justify-content: space-around; }
  @media(min-width: 768px) { justify-content: space-between; }
`;

export const StoreImg = styled.img`
  color: white;
  width: 105px;
  height: 100px;
  @media(min-width: 375px) { width: 110px; height: 100px; }
  @media(min-width: 412px) { width: 125px; height:100px ; }
  @media(min-width: 768px) { width: 218px; height: 200px; }
  @media(min-width: 993px) { width: 288px; height: 230px; }
  @media(min-width: 1200px) { width: 358px; height: 280px; }
  @media(min-width: 1300px) { width: 383px; height: 300px; }
  @media(min-width: 1400px) { width: 420px; height: 350px; }
`;

export const MapImg = styled.img`
  color: white;
  width: 120px;
  height: 90px;
  @media(min-width: 360px) { width: 130px; height: 100px; }
  @media(min-width: 375px) { width: 135px; height: 100px; }
  @media(min-width: 412px) { width: 145px; height: 100px; }
  @media(min-width: 768px) { width: 250px; height: 200px; }
  @media(min-width: 993px) { width: 340px; height: 230px; }
  @media(min-width: 1200px) { width: 420px; height: 280px; }
  @media(min-width: 1300px) { width: 470px; height: 300px; }
  @media(min-width: 1400px) { width: 496px; height: 350px; }
`;

export const Address = styled.p`
  font-family: ${MainFont2};
  background: ${Red};
  text-shadow: ${TextShadow};
  color: white;
  text-align: center;
  font-size: .9rem;
  padding: 10px;
  line-height: 1.2rem;
  margin-top: 0;
  font-variant: small-caps;
  margin-bottom: 0;
  @media(min-width:768px) { font-size: 1.4rem; line-height: 1.5rem; }
  @media(min-width:1200px) {line-height: 1.6rem; }
`;

export const Span = styled.span`
  font-size: 1.2rem;
  @media(min-width:768px) { font-size: 1.6rem; }
`;

export const RegularParagraph = styled.p`
  font-family: ${MainFont2};
  padding-left: 12px;
  padding-right: 12px;
  line-height: 1.4rem;
  font-size: 1rem;
  text-indent: 30px;
  padding-top: 10px;
  padding-bottom: 0px;
  @media(min-width:768px) {
    margin-bottom: 0;
    padding-right: 60px;
    padding-left: 60px;
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  @media(min-width:1024px) {
    margin-bottom: 0;
    padding-right: 80px;
    padding-left: 80px;
    font-size: 1.6rem;
    line-height: 1.95rem;
  }
`;

export const BlueWrapper = styled.div`
  background-color: ${Blue};
  color: white;
  margin-top: 20px;
  @media(min-width:1024px) { margin-top: 40px }
`;

export const SecondP = styled.p`
  text-shadow: ${TextShadow};
  font-family: ${MainFont2};
  padding-left: 30px;
  padding-right: 30px;
  line-height: 1.6rem;
  font-size: 1.3rem;
  letter-spacing: .1rem;
  font-variant: small-caps;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  @media(min-width:1024px) { line-height: 2rem; font-size: 1.8rem; }
`;

export const PopImg = styled.img`
  color: white;
  max-width: 19rem;
  margin: auto;
  @media(min-width: 360px) { max-width: 20rem; }
  @media(min-width: 700px) { max-width: 50rem; }
`;

export const PopNameHolder = FlexRow.extend`
  font-family: ${MainFont1};
  justify-content: center;
  font-size: 1rem;
  @media(min-width: 700px) { font-size: 2rem; }
`;


export const Josh = styled.h4`
  text-align: center;
  padding-right: 26px;
  padding-left: 20px;
  margin-bottom: 10px;
  @media(min-width: 768px) { padding-right: 50px; padding-left: 100px; }
  @media(min-width:1024px) { padding-right: 50px; padding-left: 100px; }
`;


export const Bill = styled.h4`
  margin-bottom: 10px;
  text-align: center;
  padding-right: 40px; 
  padding-left: 33px;
  @media(min-width: 768px) { padding-right: 20px; padding-left: 60px; }
  @media(min-width:1024px) { padding-right: 20px; padding-left: 60px; }
`;
export const Will = styled.h4`
text-align: center;
padding-right: 20px; 
padding-left: 20px;
margin-bottom: 10px;
@media(min-width: 768px) { padding-right: 50px; padding-left: 50px; }
@media(min-width:1024px) { padding-right: 50px; padding-left: 50px; }
`;
