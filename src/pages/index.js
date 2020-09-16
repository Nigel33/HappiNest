import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import AboutSection from '../components/aboutSection'
import ContentAndFaculties from '../components/contentAndFaculties'
import Card from '../components/card'
import BoxContent from '../components/content'
import YouTube from 'react-youtube';

import MultipleGames from '../components/multipleGames';
import { Link } from "gatsby"

import gameLogo from '../images/gameLogo.png';
import facebook from '../images/facebook.png';
import underConstruction from '../images/underConstruction.png'
import instagram from '../images/instagram.png';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBBtn } from
    "mdbreact";

class App extends Component {
  render() {
    const opts = {
      maxHeight: '800px',
      width: '600px',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

  //   _onReady(event) {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // }

    return (
      <>
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `MDBReact`, `react`, `Material Design For Bootstrap`]} />
          <Hero />          
          <main>            
            <AboutSection />
            <ContentAndFaculties />
            <BoxContent />
            <div id="how-to-play" className="text-center">
              <h2 className="text-dark text-center h3-responsive font-weight-bold mb-5">
                How to play
              </h2>  
              {/* <YouTube videoId="GTWxuVpa6lI" opts={opts} />               */}
              <div className="video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GTWxuVpa6lI" frameborder="0"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>                
                </iframe>
              </div>              
            </div>
            {/* <MultipleGames /> */}
            <div id="buy-now" className="buy-now orange-background" style={{ paddingTop: '80px' }}>
              <h4>Can't wait to play AIEOU?</h4> 
              <a target="_blank" href="https://shopee.com.my/AIEOU-Multisensory-Spelling-Card-Game-4-Games-in-1-Family-Card-Game-Fun-Exciting!-Original-Made-in-Malaysia-i.275485349.4052662424">
                <MDBBtn className="hero-cta-button full-width test test-2 test-4">Buy Now</MDBBtn>
              </a>                         
              <div className="text-center pt-4 pb-3">
                <img style={{width: "400px" }} src={gameLogo} />
              </div>          
              {/* <p>Where else can i FInd AIEOU?</p> */}
            </div>
          </main>
        </Layout>
      </>
    );
  }
}

export default App;
