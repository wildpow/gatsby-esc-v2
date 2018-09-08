import React from 'react';
import TopPromo from './TopPromo';
import { Top, Wrapper, Phone, PhoneWrapper, BR } from '../styles/topperStyles';

const Topper = () => {
  return (
    <Top>
      <Wrapper Left>
        <TopPromo/>
      </Wrapper>
      <Wrapper Right>
        <PhoneWrapper>
          <Phone href="tel:1-425-512-0017">
            Call:<BR/> (425)-512-0017
          </Phone>
        </PhoneWrapper>
      </Wrapper>
    </Top>
  )
};

export default Topper;