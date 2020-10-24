import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBBtn } from
    "mdbreact";
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import heroImage from "../images/hero.png"




const CarouselPage = () => {
  const data = useStaticQuery(graphql`
  query{
    image1: 
      file(
        relativePath: { eq: "hero.png"}      
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }   
    } 
    `)
  
    return (
      <>
        <MDBView>
          <div className="position-relative"> 
            <div className="hero-box">
              <Img fluid={data.image1.childImageSharp.fluid}
                alt="test" />   
            </div>

            {/* <MDBMask overlay="black-slight" /> */}
            {/* <MDBBtn className="hero-cta-button full-width test test-2 test-3">Buy Now</MDBBtn> */}
          </div>          
        </MDBView>
      </>
    );
}

export default CarouselPage;

////<MDBCarousel activeItem={1} length={3} className="z-depth-1 w-100">
////  <MDBCarouselInner>
////    <MDBCarouselItem itemId="1">
////      <MDBView>
////        <img className="d-block w-100" src={image4} alt="First slide" />
////        <MDBMask overlay="black-strong" />
////      </MDBView>
////    </MDBCarouselItem>
////    <MDBCarouselItem itemId="2">
////      <MDBView>
////        <img className="d-block w-100" src={image2} alt="Second slide" />
////        <MDBMask overlay="black-strong" />
////      </MDBView>
////    </MDBCarouselItem>
////    <MDBCarouselItem itemId="3">
////      <MDBView>
////        <img className="d-block w-100" src={image3} alt="Mattonit's item" />
////        <MDBMask overlay="black-strong" />
////      </MDBView>
////    </MDBCarouselItem>
////  </MDBCarouselInner>
////</MDBCarousel>
