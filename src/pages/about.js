import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import logo from '../images/logo.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBBtn } from
    "mdbreact";

export default function About() {
  return (
    <Layout>
      <SEO title="About" keywords={[`gatsby`, `MDBReact`, `react`, `Material Design For Bootstrap`]} />              
      <main>        
        <section className="about-us py-4">
          <h4 class="text-center">About Us</h4>
          <div className="text-center pt-2 pb-3">
            <img src={logo} />
          </div>
          <p className="text-center"><strong>"Bond to play, play to bond"</strong></p>   
          <p className="text-center mx-5">
            A bird’s nest symbolizes the safe and comfortable confines of home where families and friends gather to socialise. Play is one form of socialising that sparks fun and happiness. At HappiNest Games, we strive to promote play among family members and friends in the comforts of home through games that entertain yet provide educational and social values.
          </p>
        </section> 
        <section className="get-in-touch orange-background text-center py-4 text-light">
          <p>Want to get in touch with us?</p>
          <p>Contact us at:</p>
          <p>Email: happinestgames@gmail.com</p>
          <p>Whatsapp: ?????</p>
          <p>We are also looking for retailers and distributors</p>
          <p>If you are interested, kindly contact us via email or Whatsapp.</p>
          <p><strong>Wondering what's trending on HappiNest Games?</strong></p>          
          <p>Then like and follow our Facebook and Instagram page by clicking on the links below!</p>               
          <div className="text-center d-flex justify-content-center">
            <img className="mx-2" style={{ width: '40px'}} src={facebook} />
            <img className="mx-2" style={{ width: '40px'}} src={instagram} />
          </div>          
        </section>
        {/* <section className="text-center py-4">
          <p><strong>Wondering what's trending on HappiNest Games?</strong></p>          
          <p>Then like and follow our Facebook and Instagram page by clicking on the links below!</p>               
          <div className="text-center d-flex justify-content-center">
            <img className="mx-2" style={{ width: '40px'}} src={facebook} />
            <img className="mx-2" style={{ width: '40px'}} src={instagram} />
          </div>          
        </section> */}
        <section className="py-4 text-center">
          <div className="text-center pt-2 pb-3">
            <img src={logo} />
          </div>
            <p><strong>Subscribe to stay updated</strong></p>
            <p>Sign up to be the first to know about product updates and special events or campaigns</p>
            <MDBBtn className="hero-cta-button full-width" outline color="black">Sign up here</MDBBtn>
        </section>
      </main>
    </Layout>
  )
}