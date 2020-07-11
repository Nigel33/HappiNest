import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";
import bronze from "../images/bronze.png"
import silver from "../images/silver.png"
import gold from "../images/gold.png"
import vowels from "../images/vowels.jpg"

const MultipleGames = () => {
    return (
      <div className="mb-5 mx-5 giant-bee">
          <h2 className="text-dark text-center h3-responsive font-weight-bold my-5">
            4 games in a box!
          </h2>          
          <MDBRow className="mb-4">
            <MDBCol>
              <h5 className="text-center">Grab it!</h5>
              <p>
                Rush to grab the correct missing vowel or
                yell AIEOU instead! Grab It! sharpens a
                player’s eye, hand and mental coordination
                as it combines picture-word recognition and
                spelling with logic deduction and motor 
                reflexes.
              </p>
            </MDBCol>
            <MDBCol>
            <h5 className="text-center">Speed Spells</h5>
              <p>
                It’s a musical chair spelling game! Race to
                lay down correct vowel cards to spell out a
                word before grabbing a vowel piece. Last
                one to do this gets penalised with a card
                instead! Speed Spells combines picture
                word recognition and spelling with fast
                physical reflexes. It has speed and frantic
                elements to provide fun and excitement!
              </p>
            </MDBCol>            
          </MDBRow>
          <MDBRow>          
            <MDBCol>
              <h5 className="text-center">Match'em!</h5>
              <p>
                Combine the classic game of Snap with spelling.
                What do you get? Match’em! Identify matching
                vowels in played out cards. When a match occurs,
                be the first to grab a vowel piece to win!
                Match’em! stimulates observation and speedy
                analysis which spark intense moments.
              </p>
            </MDBCol>
            <MDBCol>
              <h5 className="text-center">Memory Buzz</h5>
              <p>
                Can your mind stop buzzing around and focus on 
                memorising? Memorise objects with the number and 
                sequence of each object. But be careful not to recall
                them wrongly, or else. Memory Buzz prompts players
                to focus and memorise in a fun-filled way! 
              </p>
            </MDBCol>  
          </MDBRow>
      </div>
    );
}

export default MultipleGames;
