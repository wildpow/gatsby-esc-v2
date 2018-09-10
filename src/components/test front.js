import React from 'react';
import { Headline, Wrapper, P } from '../styles/homeStyles';
import { StaticQuery, graphql } from "gatsby";

const Front = () => {
  return (
    <Wrapper>
      <StaticQuery
        query={graphql`
          query front {
            front {
              id
              title
              textBlock
            }
          }
        `}
        render={data => (
          <>
          <Headline>{data.front.title}</Headline>
            <P>
              {data.front.textBlock}
            </P>
          </>
        )}
      />
      <Headline red>“Sleep Like the Experts Do!”</Headline>
    </Wrapper>
  )
}

export default Front;