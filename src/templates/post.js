import React from 'react';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import { graphql } from "gatsby";
import logo from '../images/logo.png';
import BreadCrumbs, { BreadWrapper } from '../components/breadCrumbs';
import { Marker, BottomImg, Main } from '../styles/postStyles';
import { H2 } from '../styles/mainStyles';

const Post = (props) => {
  const { post } = props.data

  function makeTitle(slug) {
    var words = slug.split('-');

    for(var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(' ');
}

  return (
    <Layout>
      <Helmet>
        <title>{makeTitle(post.slug)}</title>
        <meta name="description" content={post.content}/>
        <meta property="og:type"   content="website" />
        <meta property="og:site_name" content="E.S.C. Mattress Center"/>
        <meta property="og:image" content={logo}/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="627"/>
        <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
        <meta property="og:title" content={`E.S.C. Mattress Center | ${post.title}`}/>
        <meta property="og:description" content={post.title}/>
      </Helmet>
      <BreadWrapper Blog>
        <BreadCrumbs next="Blog" here={makeTitle(post.slug)}/>
      </BreadWrapper>
      <Main>
        <header>
          <H2>{post.title}</H2>
        </header>
        <article>
          <Marker
            source={post.content}
            escapeHtml={false}
          />
        </article>
        {post.bottomimg ?
          <BottomImg src={`https://media.graphcms.com/resize=w:${post.bottomimg.width},h:${post.bottomimg.height},fit:clip/${post.bottomimg.handle}`} alt={`Image related to ${post.title}`}/>
                        : null}
      </Main>
      <BreadWrapper Blog>
          <BreadCrumbs next="Blog" here={post.title}/>
      </BreadWrapper>
    </Layout>
  )
}

export default Post;

export const postQuery = graphql`
  query SinglePost($slug: String!) {
    post(slug: { eq: $slug }) {
      id
      slug
      isPublished
      title
      dateAndTime
      coverImage { handle }
      content
      bottomimg {
        handle
        width
        height
      }
    }
  }`