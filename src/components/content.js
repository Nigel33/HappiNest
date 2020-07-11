import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";
import bronze from "../images/bronze.png"
import silver from "../images/silver.png"
import gold from "../images/gold.png"
import vowels from "../images/vowels.jpg"

const FeaturesPage = () => {
    return (
        <div className="mb-5 mx-5">
          <h2 className="text-dark text-center h3-responsive font-weight-bold my-5">
            What's in the box?
          </h2>          
        <MDBRow className="mb-4">
          <MDBCol className="d-flex justify-content-center" style={{ maxWidth: "22rem" }}>
              <div className="text-center" style={{ maxWidth: "10rem" }}>
                <p className="text-center">36 bronze cards</p>
                <MDBCard>
                  <MDBCardImage className="img-fluid" src={bronze} alt="" waves />
                </MDBCard>
              </div>              
            </MDBCol>
            <MDBCol className="d-flex justify-content-center" style={{ maxWidth: "22rem" }}>
              <div className="text-center" style={{ maxWidth: "10rem" }}>
                <p>36 silver cards</p>
                <MDBCard>
                  <MDBCardImage className="img-fluid" src={silver} alt="" waves />
                </MDBCard>
              </div>       
          </MDBCol>
          <MDBCol className="d-flex justify-content-center" style={{ maxWidth: "22rem" }}>
            <div className="text-center" style={{ maxWidth: "10rem" }}>
              <p>36 gold cards</p>
              <MDBCard>
                <MDBCardImage className="img-fluid" src={gold} alt="" waves />
              </MDBCard>
            </div>       
          </MDBCol>
        </MDBRow>
        <MDBRow>          
          <MDBCol>
            <div className="text-center" style={{ margin: "0 auto", maxWidth: "10rem" }}>
              <p>5 vowel pieces</p>
              <MDBCard>
                <MDBCardImage className="img-fluid" src={vowels} alt="" waves />
              </MDBCard>
            </div>       
          </MDBCol>
        </MDBRow>
      </div>
    );
}

export default FeaturesPage;
