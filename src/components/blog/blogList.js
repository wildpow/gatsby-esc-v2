import React from 'react';
import { StyledLink, InfoWrapper, Img, H3} from './blogListStyles';

const BlogList = ({ items, count }) => {
  if (count) items = items.slice(0, count)
  return (
    <React.Fragment>
      {items.map(({ node }) => {
        return (
          <StyledLink to={`/blog/${node.slug}`} key={node.id}>
            <InfoWrapper>
              <Img  
                src={`https://media.graphcms.com/resize=w:150,h:150,fit:clip/${node.coverImage.handle}`} 
                alt={`Small image for the blog post called ${node.title}`}
        />
      </InfoWrapper>
      <H3>{node.title}</H3>
    </StyledLink>
        )
      })}
    {console.log(items)}
    </React.Fragment>
      
  )
}

export default BlogList