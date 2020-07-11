import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";

const FeaturesPage = () => {
    return (
        <MDBContainer tag="section"  className="text-center my-5">
          <h2 className="h3-responsive font-weight-bold my-5">
            AIEOU is an educational spelling game with  multisensory elements
          </h2>
          <p className="lead w-responsive mx-auto mb-5">
            AIEOU offers 4 different games:
          </p>
          <MDBRow>
            <MDBCol md="3">
              <MDBIcon icon="chart-area" size="3x" className="red-text" />
              <h5 className="font-weight-bold my-4">Grab It!</h5>
              <p className="black-text mb-md-0 mb-5">
              Rush to grab the correct missing vowel or
              yell AIEOU instead! 
              </p>
            </MDBCol>
            <MDBCol md="3">
              <MDBIcon icon="book" size="3x" className="cyan-text" />
                <h5 className="font-weight-bold my-4">Speed Spells</h5>
                <p className="black-text mb-md-0 mb-5">
                  A musical chair spelling game! Race to
                  lay down correct vowel cards!
                </p>
            </MDBCol>
            <MDBCol md="3">
              <MDBIcon far icon="comments" size="3x" className="orange-text" />
              <h5 className="font-weight-bold my-4">Match’em!</h5>
              <p className="black-text mb-md-0 mb-5">
                Combine the classic game of Snap with spelling.
                What do you get? Match’em!
              </p>
            </MDBCol>
            <MDBCol md="3">
              <MDBIcon far icon="comments" size="3x" className="orange-text" />
              <h5 className="font-weight-bold my-4">Memory Buzz</h5>
              <p className="black-text mb-md-0 mb-5">
              Can your mind stop buzzing around and focus on 
              memorising? 
              </p>
            </MDBCol>
          </MDBRow>          
        </MDBContainer>
    );
}

export default FeaturesPage;
