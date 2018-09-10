import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import { SiteLinks } from '../styles/siteMapStyles';

const AdjSiteMapData = () => {
  return (
    <StaticQuery
      query={graphql`
        query allAdjSiteMap {
          allAdjBasese(sort: {fields: value order: ASC} filter: {isPublished: {eq: true}}) {
            edges {
              node {
                uri fullName id
              }
            }
          }
        }`}
        render={data => (
          <React.Fragment>
            {data.allAdjBasese.edges.map((base) => {
              return (
                <li key={base.node.id}>
                  <SiteLinks to={`/adjustable/${base.node.uri}`}>
                    {base.node.fullName}
                  </SiteLinks>
                </li>
              )
            })}
            
          </React.Fragment>
        )}
        />
  )
}
export default AdjSiteMapData
