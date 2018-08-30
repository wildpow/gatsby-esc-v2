import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import { BigPromo, PromoLink } from '../Styles/TopperStyles';

const TopPromo = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        query toppers {
          topper {
            id
            currentpromo
        }
      }
    `}
    render={data => (
      <PromoLink to="/current-sale">
        <BigPromo>
          {data.topper.currentpromo}
        </BigPromo>
      </PromoLink>
    )}
  />
  )
}

export default TopPromo

