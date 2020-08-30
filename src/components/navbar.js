import React, { Component } from "react";
import {
  MDBContainer, MDBNavbar,  MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn
} from "mdbreact";
import CustomNavLink from './customLink';
import logo from "../images/Logo.png";
import { AnchorLink } from "gatsby-plugin-anchor-links";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <>
        <MDBNavbar color="white" light expand="md" style={{ minHeight: '70px' }}>
          <AnchorLink to="/" className="navbar-brand">
            <img src={logo} style={{height: '50px'}} alt="Responsive image" />
          </AnchorLink>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <AnchorLink className="mr-4" to="/#buy-now" title="Buy AIEOU">
                  <span>Buy AIEOU</span>
                </AnchorLink>
              </MDBNavItem>              
              <MDBNavItem className="mr-4">
                <AnchorLink to="/about" title="Our team">
                  <span>About Us</span>
                </AnchorLink>
              </MDBNavItem>
              <MDBNavItem className="mr-4">
                <AnchorLink to="/about#contact" title="Our team">
                  <span>Contact Us</span>
                </AnchorLink>
              </MDBNavItem>
              <MDBNavItem className="mr-4">
                <AnchorLink to="/about#subscribe" title="Our team">
                  <span>Subscribe</span>
                </AnchorLink>  
              </MDBNavItem>
              <MDBNavItem>
                <AnchorLink to="https://happinestfamily.blogspot.com/" target="_blank" title="BLog">
                  <span>Blog</span>
                </AnchorLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <div className="d-flex align-items-center">               
                {
                  !this.state.open && <MDBBtn className="mx-auto hero-cta-button full-width test test-2 test-3">Buy Now</MDBBtn>
                }                
                <CustomNavLink to="https://www.facebook.com/happinestgames/?ref=py_c" target="_blank">
                  <MDBIcon fab icon="facebook" className="ml-1" />
                </CustomNavLink>
                <CustomNavLink to="https://www.instagram.com/happinest.games/" target="_blank">
                  <MDBIcon fab icon="instagram" className="ml-1" />
                </CustomNavLink>                
                <CustomNavLink to="https://api.whatsapp.com/send?phone=+60176373108&text=%20Hello" target="_blank">
                  <MDBIcon fab icon="whatsapp" className="ml-1" />
                </CustomNavLink>
              </div>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>        
      </>        
    );
  }
}

export default NavbarPage;

