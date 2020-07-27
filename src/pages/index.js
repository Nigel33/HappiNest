import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import AboutSection from '../components/aboutSection'
import ContentAndFaculties from '../components/contentAndFaculties'
import Card from '../components/card'
import BoxContent from '../components/content'

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
    return (
      <>
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `MDBReact`, `react`, `Material Design For Bootstrap`]} />
          <Hero />          
          <main>
            <Link to="about">Contact</Link>
            <AboutSection />
            <ContentAndFaculties />
            <BoxContent />
            <div id="how-to-play" className="text-center mb-5">
              <h2 className="text-dark text-center h3-responsive font-weight-bold my-5">
                How to play
              </h2>  
              <img src={underConstruction} style={{ width: '80%' }} />
            </div>
            {/* <MultipleGames /> */}
            <div id="buy-now" className="buy-now orange-background" style={{ paddingTop: '80px' }}>
              <h4>Can't wait to play AIEOU?</h4>              
              <MDBBtn className="hero-cta-button full-width test test-2 test-4" outline color="white">Buy Now</MDBBtn>
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
