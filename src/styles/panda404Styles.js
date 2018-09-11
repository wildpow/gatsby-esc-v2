import styled from 'styled-components';
import { FlexCol, MainFont2, MainFont1, Border, BoxShadow,
          Animation, FadeIn, Blue, TextShadow} from './mainStyles';

export const Main = FlexCol.extend`
  font-family: ${MainFont2};
  border: ${Border};
  box-shadow: ${BoxShadow};
  animation-name: ${FadeIn}; 
  ${Animation}
  border-radius: .11rem;
  transition: all .2s ease-in;
  text-align: center;
  justify-content: center;
  @media(min-width: 1300px) {
    margin-left: 85px;
    margin-right: 85px;
  }
`;

export const Img = styled.img`
  color: white;
  margin: auto;
  max-width: 20rem;
  transition: all .2s ease-in;
  @media(min-width: 800px) { max-width: 40rem; }
`;

export const Header = styled.header`
  background-color: ${Blue};
  font-family: ${MainFont1};
  text-shadow: ${TextShadow};
  font-size: 1.2rem;
  padding: 0px 30px 0px 30px;
  color: white;
`;

// export const Title = styled.h2`
//   background-color: ${Blue};
//   font-family: ${MainFont1};
//   text-shadow: ${TextShadow};
//   color: white;
//   margin: 0;
//   font-size: 1rem;
//   letter-spacing: .22rem;
//   padding: 12px 8px 12px 8px;
//   line-height: 1.3rem;
//   @media(min-width: 768px) {
//     font-size: 1.3rem;
//   }
//   @media(min-width: 1024px) {
//     font-size: 1.5rem;
//     letter-spacing: .25rem;
//     padding: 25px 30px 25px 30px;
//   }
// `;
