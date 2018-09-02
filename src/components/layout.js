import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Logo from './logo';
import Navigation from './nav';
// import './layout.css'
import Footer from './footer';
import Topper from './Topper';
import MenuButton from './MenuButton';
import Menu from './Menu';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 5px;
  padding-right: 5px;
  @media (min-width: 768px) { width: 750px; padding-left: 10px; padding-right: 10px; }
  @media (min-width: 992px) { width: 970px; padding-left: 5px; padding-right: 5px; }
  @media (min-width: 1200px) { width: 1170px; }
  @media (min-width: 1300px) { width: 1270px; }
  @media (min-width: 1400px) { width: 1370px; }
`;

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this)
  };
  handleMouseDown(e) {
    this.toggleMenu();
    e.stopPropagation();
  }
  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    })
  }
  render() {
    return (
      <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Topper />
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
        <Navigation />
        <Logo />
        <Container>
          {this.props.children}
          <Footer />
        </Container>
      </>
    )}
  />
    )
  }
}
  


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
