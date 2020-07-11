import React from "react";
import { MDBRow, MDBCol, MDBMask, MDBView } from "mdbreact";
import visualPerception from "../images/visual-perception.jpg"
import analytics from "../images/analytics.jpg"
import memory from "../images/memory.jpg"
import reflexes from "../images/reflexes.jpg"
import image from "../images/visual-perception.jpg"
// import BoxContent from '../components/content'


const ContentAndFaculties = () => {
  return (
    <div> 
      <h4 className="text-center py-4">AIEOU offers these benefits</h4>     
      <MDBRow className="m-0" center>        
        <MDBCol className="align-items-center justify-content-center d-flex attribute-text visual-perception p-0">          
          <MDBView className="w-100">
            <div className="visual-perception align-items-center justify-content-center d-flex">
                <p className="attribute-text top-most d-flex">
                  Stimulates Visual Perception
                </p>
            </div>
            <MDBMask overlay="indigo-light" />
          </MDBView>    
        </MDBCol>
        <MDBCol className="align-items-center justify-content-center d-flex attribute-text analytics p-0">
          <MDBView className="w-100">
            <div className="memory align-items-center justify-content-center d-flex">
              <p className="attribute-text top-most d-flex">
                Trains Memory
                </p>
            </div>
            <MDBMask overlay="indigo-light" />
          </MDBView>
        </MDBCol>
        <MDBCol className="align-items-center justify-content-center d-flex attribute-text memory p-0">
          <MDBView className="w-100">
            <div className="reflexes align-items-center justify-content-center d-flex">
              <p className="attribute-text top-most d-flex">
                Enhances Mental & Physical Reflexes
                </p>
            </div>
            <MDBMask overlay="indigo-light"/>
          </MDBView>
        </MDBCol>
        <MDBCol className="p-0">
          <MDBView className="w-100">            
            <div className="analytics align-items-center justify-content-center d-flex">        
                <p className="attribute-text top-most d-flex">
                  Sharpens Analytics
                </p>
              </div>
              <MDBMask overlay="indigo-light" />                         
          </MDBView>
        </MDBCol>       
      </MDBRow>
      <MDBRow className="m-0" center>
        
        {/* <BoxContent /> */}
      </MDBRow>
      <MDBRow className="m-0" center>
        {/* <MDBCol className="align-items-center justify-content-center d-flex attribute-text memory p-0">
          <MDBView className="w-100">
            <div className="reflexes align-items-center justify-content-center d-flex">
              <p className="attribute-text top-most d-flex">
                Mental & Physical Reflexes
                </p>
            </div>
            <MDBMask overlay="indigo-light"/>
          </MDBView>
        </MDBCol>
        <MDBCol className="p-0">
          <MDBView className="w-100">            
            <div className="analytics align-items-center justify-content-center d-flex">        
                <p className="attribute-text top-most d-flex">
                  Analytics
                </p>
              </div>
              <MDBMask overlay="indigo-light" />                         
          </MDBView>
        </MDBCol>         */}
      </MDBRow>      
    </div>
  );
}

export default ContentAndFaculties;

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
