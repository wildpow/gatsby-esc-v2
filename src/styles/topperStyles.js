import styled from 'styled-components';
import { Link } from 'gatsby'

export const PromoLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
export const Promo = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const BigPromo = Promo.extend`
  max-width: 160px;
  transition: all .25s ease-in;
  &:hover { transform: scale(1.04); }
  @media(min-width: 415px) {
    max-width: 2000px;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ffffff;
  background-color: ${props => props.theme.main};
  font-variant: small-caps;
  padding: 10px 6px 10px 6px;
  transition: all .25s ease-in;
  font-family: 'Roboto', sans-serif;
  font-size: .8rem;
  letter-spacing: .036rem;
  @media(min-width: 411px) { font-size: .9rem;}
  @media (min-width: 568px) { font-size: 1rem;}
  @media (min-width: 768px) { font-size: 1.4rem; 
    padding: 10px 12px 12px 12px;
    letter-spacing: .1rem; 
  }
  @media (min-width: 1024px) { font-size: 1.5rem;}
 
`;
Top.defaultProps = {
  theme: {
    main: '#1565c0'
  }
}

export const Wrapper = styled.div`
  margin-top: 0;
  margin-right: ${(props) => props.Right ? '5px' : '0px'};
  margin-left: ${(props) => props.Left ? '5px' : '0px'};
  margin-bottom: 0;
  padding:0;
  text-align: cetner;
 
  @media (min-width: 375px) {
    margin-right: ${(props) => props.Right ? '1px' : '0px'};
    margin-left: ${(props) => props.Left ? '1px' : '0px'};
  }
  @media(orientation: landscape) {
    margin-right: ${(props) => props.Right ? '20px' : '0px'};
    margin-left: ${(props) => props.Left ? '20px' : '0px'};
  }
  @media(min-width: 768px) {
    margin-right: ${(props) => props.Right ? '10px' : '0px'};
    margin-left: ${(props) => props.Left ? '10px' : '0px'};
  }
`;

export const Phone = styled.a`
  text-decoration: none;
  color: #ffffff;
  transition: all .25s ease-in;
  text-shadow: 0px 0px 0px rgba(0, 0, 0, .1);
`;

export const PhoneWrapper = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
  transition: all .25s ease-in;
  &:hover { transform: scale(1.04); }
`;

export const BR = styled.br`
  
  @media(min-width: 415px) {
    display: none;
  }
`;