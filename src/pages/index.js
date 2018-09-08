import React from 'react';
import Layout from '../components/layout';
import { Main, Linky } from '../styles/homeStyles';
import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import Front from '../components/front';
import { Carousel } from 'react-responsive-carousel'; 
import { graphql } from "gatsby";
import Helmet from 'react-helmet';
import logo from '../images/logo.png';

injectGlobal`
  ${styledNormalize}
  html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
.carousel.carousel-slider .control-arrow,.carousel .control-arrow{-webkit-transition:all .25s ease-in;-o-transition:all .25s ease-in;transition:all .25s ease-in;opacity:.4;position:absolute;z-index:2;top:20px;background:0 0;border:0;font-size:32px;cursor:pointer}.carousel .control-arrow:hover{opacity:1}.carousel.carousel-slider .control-arrow:before,.carousel .control-arrow:before{margin:0 5px;display:inline-block;border-top:8px solid transparent;border-bottom:8px solid transparent;content:""}.carousel .control-disabled.control-arrow{opacity:0;cursor:inherit;display:none}.carousel .control-prev.control-arrow{left:0}.carousel .control-prev.control-arrow:before{border-right:8px solid #fff}.carousel .control-next.control-arrow{right:0}.carousel .control-next.control-arrow:before{border-left:8px solid #fff}.carousel{position:relative;width:100%}.carousel *{-webkit-box-sizing:border-box;box-sizing:border-box}.carousel button{outline:0;border:0;background:0 0}.carousel img{width:100%;display:inline-block;pointer-events:none}.carousel .carousel{position:relative}.carousel .control-arrow{top:50%;margin-top:-13px;font-size:18px}.carousel .thumbs-wrapper{margin:20px;overflow:hidden}.carousel .thumbs{-webkit-transition:all .15s ease-in;-o-transition:all .15s ease-in;transition:all .15s ease-in;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);position:relative;list-style:none;white-space:nowrap}.carousel .thumb{-webkit-transition:border .15s ease-in;-o-transition:border .15s ease-in;transition:border .15s ease-in;display:inline-block;width:80px;margin-right:6px;white-space:nowrap;overflow:hidden;border:3px solid #fff;padding:2px}.carousel .thumb.selected,.carousel .thumb:hover{border:3px solid #333;padding:2px}.carousel .thumb img{vertical-align:top}.carousel.carousel-slider{position:relative;margin:0;overflow:hidden}.carousel.carousel-slider .control-arrow{top:0;color:#fff;font-size:26px;bottom:0;margin-top:0;padding:5px}.carousel.carousel-slider .control-arrow:hover{background:rgba(0,0,0,.2)}.carousel .slider-wrapper{overflow:hidden;margin:auto;width:100%;-webkit-transition:height .15s ease-in;-o-transition:height .15s ease-in;transition:height .15s ease-in}.carousel .slider-wrapper.axis-horizontal .slider{-ms-box-orient:horizontal;display:-ms-flexbox;display:-moz-flex;display:flex}.carousel .slider-wrapper.axis-horizontal .slider .slide{-ms-flex-direction:column;flex-direction:column;-ms-flex-flow:column;flex-flow:column}.carousel .slider-wrapper.axis-vertical{-ms-box-orient:horizontal;display:-ms-flexbox;display:-moz-flex;display:flex}.carousel .slider-wrapper.axis-vertical .slider{-ms-flex-direction:column;flex-direction:column}.carousel .slider{margin:0;padding:0;position:relative;list-style:none;width:100%}.carousel .slider.animated{-webkit-transition:all .35s ease-in-out;-o-transition:all .35s ease-in-out;transition:all .35s ease-in-out}.carousel .slide{min-width:100%;margin:0;position:relative;text-align:center;background:#000}.carousel .slide img{width:100%;vertical-align:top;border:0}.carousel .slide iframe{display:inline-block;width:calc(100% - 80px);margin:0 40px 40px;border:0}.carousel .slide .legend{-webkit-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out;position:absolute;bottom:40px;left:50%;margin-left:-45%;width:90%;border-radius:10px;background:#000;color:#fff;padding:10px;font-size:12px;text-align:center;opacity:.25;-webkit-transition:opacity .35s ease-in-out;-o-transition:opacity .35s ease-in-out;transition:opacity .35s ease-in-out}.carousel .control-dots{position:absolute;bottom:0;margin:10px 0;text-align:center;width:100%}@media (min-width:960px){.carousel .control-dots{bottom:0}}.carousel .control-dots .dot{-webkit-transition:opacity .25s ease-in;-o-transition:opacity .25s ease-in;transition:opacity .25s ease-in;opacity:.3;-webkit-box-shadow:1px 1px 2px rgba(0,0,0,.9);box-shadow:1px 1px 2px rgba(0,0,0,.9);background:#fff;border-radius:50%;width:8px;height:8px;cursor:pointer;display:inline-block;margin:0 8px}.carousel .control-dots .dot.selected,.carousel .control-dots .dot:hover{opacity:1}.carousel .carousel-status{position:absolute;top:0;right:0;padding:5px;font-size:10px;text-shadow:1px 1px 1px rgba(0,0,0,.9);color:#fff}.carousel:hover .slide .legend{opacity:1}.slide{margin-bottom:0!important;margin-top:0!important;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}.carousel .slide{background:#fff;margin:auto}.control-prev{width:50px!important;font-size:2rem}.control-next{width:50px}@media(min-width:1100px){.control-next{width:70px}.control-prev{width:70px!important;font-size:2rem}}.carousel.carousel-slider .control-arrow:before,.carousel .control-arrow:before{border-top:20px solid transparent;border-bottom:20px solid transparent}.carousel .control-next.control-arrow:before{border-left:20px solid #fff}.carousel .control-prev.control-arrow:before{border-right:20px solid #fff}
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto:700');
`

const IndexPage = (props) => {
  const { edges } = props.data.allCarousel
  return (
  <Layout>
    <Helmet>
        <title>E.S.C. Mattress Center</title>
        <meta name="description" content="A licensed mattress retailer for Sealy, Stearns and Foster, and Tempur-Pedic offering almost fifty mattresses with prices to fit every budget.  ESC Mattress Center is a locally owned company in Everett WA with more than twenty years of mattress industry experience between our non-commissioned staff."/>
        <meta property="og:type"   content="website" />
        <meta property="og:site_name" content="E.S.C. Mattress Center"/>
        <meta property="og:url" content="https://www.escmattresscenter.com/"/>
        <meta property="og:image" content={logo}/> 
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="627"/>
        <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
        <meta property="og:title" content="E.S.C. Mattress Center"/>
        <meta property="og:description" content="A licensed mattress retailer for Sealy, Stearns and Foster, and Tempur-Pedic offering almost fifty mattresses with prices to fit every budget.  ESC Mattress Center is a locally owned company in Everett WA with more than twenty years of mattress industry experience between our non-commissioned staff."/>
      </Helmet>
    <Main>
    <Carousel
        infiniteLoop={true} autoPlay={true} showThumbs={false}
        interval={6000} 
        centerMode={true}
        centerSlidePercentage={100}
        showStatus={false}
      >
      {
        edges.map(car => {
          return (
          <Linky key={car.node.id} to={`${car.node.url}`}>
            <img src={`https://media.graphcms.com/resize=w:980,h:450,fit:clip/${car.node.image.handle}`} alt={car.node.altTextForImage}/>
          </Linky>
          )
        })
      }
      </Carousel>
      <Front/>
    </Main>
  </Layout>
)
}
export const carouselQuery = graphql`
  query carousels {
    allCarousel {
      edges {
        node {
          altTextForImage
          url
          id
          image {
            handle
            width
            height
          }
        }
      }
    }
  }
`
export default IndexPage
