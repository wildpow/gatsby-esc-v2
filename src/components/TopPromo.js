import React from 'react';
/* global graphql */
import { BigPromo, PromoLink } from '../Styles/TopperStyles';
// Promo, BR,

const TopPromo = ({ data }) => {
  return (
    <PromoLink to="/current-sale">
      <BigPromo>
       hello
      </BigPromo>
    </PromoLink>
  )
}

export default TopPromo

