import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import logo from '../images/logo.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import CustomNavLink from '../components/customLink';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBBtn, MDBIcon, MDBRow, MDBCol } from
    "mdbreact";
import teacher from '../images/teacher.png'
import retail from '../images/retail.png'
import distributor from '../images/distributor.png'
import whatsapp from '../images/whatsapp.png'
import gmail from '../images/gmail.png'

export default function About() {
  return (
    <Layout>
      <SEO title="About" keywords={[`gatsby`, `MDBReact`, `react`, `Material Design For Bootstrap`]} />              
      <main>        
        <section className="about-us py-4">
          <h4 class="text-center">About Us</h4>
          <div className="text-center pt-2 pb-3">
            <img style={{ width: '200px'}} src={logo} />
          </div>
          <p className="text-center"><strong>"Born to play, play to bond"</strong></p>   
          <p className="text-center mx-5">
            A bird’s nest symbolizes the safe and comfortable confines of home where families and friends gather to socialise. Play is one form of socialising that sparks fun and happiness. At HappiNest Games, we strive to promote play among family members and friends in the comforts of home through games that entertain yet provide educational and social values.
          </p>
        </section> 
        <section id="contact" className="get-in-touch orange-background text-center py-4 text-white">
          <h4>Contact Us</h4>
            <div className="mb-5 flex-center" style={{ listStyleType: "none" }}>  
              <CustomNavLink className="mr-3"to="https://api.whatsapp.com/send?phone=+60176373108&text=%20Hello" target="_blank">
                <img src={gmail} style={{ width: '60px', paddingBottom: '-10px'}} />
                <p className="text-white">happinestgames@gmail.com</p>
              </CustomNavLink>   
              <CustomNavLink className="ml-3" to="https://api.whatsapp.com/send?phone=+60176373108&text=%20Hello" target="_blank">
                <img src={whatsapp} style={{ width: '60px'}} />                  
                <p className="text-white">(+6) 017-6373108</p>
              </CustomNavLink>                                              
            </div>
            <h5 className="mb-3 ">We are also looking for interested:</h5>
            <MDBRow>
              <MDBCol md="4" sm="4">
                {/* <MDBIcon icon="chart-area" size="3x" className="red-text" /> */}
                <img src={teacher} style={{ width: '60px'}} />
                <h5 className="my-2 text-white">Schools</h5>              
              </MDBCol>
              <MDBCol md="4" sm="4">
                {/* <MDBIcon icon="book" size="3x" className="cyan-text" /> */}
                <img src={retail} style={{ width: '60px'}} />
                <h5 className="my-2 text-white">Retailers</h5>                  
              </MDBCol>
              <MDBCol md="4" sm="4">
                {/* <MDBIcon far icon="comments" size="3x" className="orange-text" /> */}
                <img src={distributor} style={{ width: '60px'}} />
                <h5 className="my-2 text-white">Distributors</h5>
              </MDBCol>
            </MDBRow>  
            <div className="mt-2 text-center text-white">
              <h6>What's trending at HappiNest Games?</h6>
              <h6>Connect with us</h6>
            </div>            
            <div className="flex-center" style={{ listStyleType: "none" }}>
              <CustomNavLink to="https://www.facebook.com/happinestgames/?ref=py_c" target="_blank">
                <img className="mx-2" style={{ width: '40px'}} src={facebook} />
              </CustomNavLink>
              <CustomNavLink to="https://www.instagram.com/happinest.games/" target="_blank">
                <img className="mx-2" style={{ width: '40px'}} src={instagram} />
              </CustomNavLink>
            </div>
          
          {/* <p>Want to get in touch with us?</p>
          <p>Contact us at:</p>
          <p>Email: happinestgames@gmail.com</p>
          <p>Whatsapp: +6017-6373108</p>
          <p>We are also looking for retailers and distributors</p>
          <p>If you are interested, kindly contact us via email or Whatsapp.</p>
          <p><strong>Wondering what's trending on HappiNest Games?</strong></p>          
          <p>Then like and follow our Facebook and Instagram page by clicking on the links below!</p>               
          <div className="text-center d-flex justify-content-center">
            <img className="mx-2" style={{ width: '40px'}} src={facebook} />
            <img className="mx-2" style={{ width: '40px'}} src={instagram} />
          </div>           */}
        </section>
        {/* <section className="text-center py-4">
          <p><strong>Wondering what's trending on HappiNest Games?</strong></p>          
          <p>Then like and follow our Facebook and Instagram page by clicking on the links below!</p>               
          <div className="text-center d-flex justify-content-center">
            <img className="mx-2" style={{ width: '40px'}} src={facebook} />
            <img className="mx-2" style={{ width: '40px'}} src={instagram} />
          </div>          
        </section> */}
        <section id="subscribe" className="py-4 text-center">
          <div className="text-center pt-2 pb-3">
            <img src={logo} style={{ width: '200px'}}/>
          </div>
            <p><strong>Subscribe to stay updated</strong></p>
            <p>Sign up to be the first to know about product updates and special events or campaigns</p>                    
            <a target="_blank" href="https://gmail.us18.list-manage.com/subscribe?u=5282ad114e04cc1ac32ff3786&id=1ab3e21e74" style={{ color: 'black' }}>
              <MDBBtn className="hero-cta-button full-width" outline color="black">
                Sign up here
              </MDBBtn> 
            </a>                    
        </section>
      </main>
    </Layout>
  )
}