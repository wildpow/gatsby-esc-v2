import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import { Section, Homebutton, ShowMoreWrapper, Main} from '../styles/blogListStyles';
import { H2 } from '../styles/mainStyles';
import Layout from '../components/layout';
import logo from '../images/logo.png';
import BlogList from '../components/blog/blogList';

class Blog extends React.Component {
  state = {
    postsToShow: 4
  }
  render() {
    let items = this.props.data.allPost.edges
  return (
    <Layout>
      <Helmet>
          <title>ESC: Blog</title>
          <meta name="description" content="Come read about ways to achieve better sleep, and live healthier from people who have been helping people sleep better for 20+ years. Check here to see our schedule of professional speakers speaking on sleep topics."/>
          <meta property="og:type"   content="website" />
          <meta property="og:site_name" content="E.S.C. Mattress Center"/>
          <meta property="og:url" content="https://www.escmattresscenter.com/"/>
          <meta property="og:image" content={logo}/> 
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="627"/>
          <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
          <meta property="og:title" content="E.S.C. Mattress Center | Blog"/>
          <meta property="og:description" content="Come read about ways to achieve better sleep, and live healthier from people who have been helping people sleep better for 20+ years. Check here to see our schedule of professional speakers speaking on sleep topics."/>
        </Helmet>
      <Main>
        <header>
          <H2>Our Blog</H2>
        </header>
        <Section>
          <BlogList items={items} count={this.state.postsToShow} />
          {console.log(items)}
          <ShowMoreWrapper>
            {this.state.postsToShow < items.length  && (
              <Homebutton onClick={() => {
                this.setState({
                  postsToShow: this.state.postsToShow + 4
                })
              }}>
                Show More Posts
              </Homebutton>
            )}
          </ShowMoreWrapper>
        </Section>
      </Main>
    </Layout>
  )
}
}
export default Blog;

export const blogList = graphql`
  query blogList {
    allPost(sort: {fields: dateAndTime order: DESC} filter: {isPublished: {eq: true}}) {
      edges {
        node {
          slug
          title
          dateAndTime
          coverImage { handle}
          id
        }
      }
    }
  }
`