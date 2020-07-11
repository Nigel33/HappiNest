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
            {/* <MultipleGames /> */}
            <div id="buy-now" className="buy-now orange-background" style={{ paddingTop: '80px' }}>
              <h4>Can't wait to play AIEOU?</h4>
              <h5>Eager to get hold of AIEOU?</h5>
              <MDBBtn className="hero-cta-button full-width" outline color="white">Buy Now</MDBBtn>
              <div className="text-center pt-4 pb-3">
                <img style={{width: "250px" }} src={gameLogo} />
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
