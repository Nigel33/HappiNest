import React, { Component } from "react";
import {
  MDBContainer, MDBNavbar,  MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import CustomNavLink from './customLink';
import logo from "../images/logo.png";
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
      <MDBNavbar color="white" light expand="md">
        <MDBContainer>                    
          <CustomNavLink to="/" className="navbar-brand">
            <img src={logo} style={{height: '50px'}} alt="Responsive image" />
          </CustomNavLink>
          <MDBNavbarToggler color="dark" onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem className="mr-4">
                <AnchorLink to="/" title="Home">
                  <span>Home</span>
                </AnchorLink>
              </MDBNavItem>
              <MDBNavItem className="mr-4">
                <AnchorLink to="/#buy-now" title="Buy AIEOU">
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
                <AnchorLink to="/about" title="Our team">
                  <span>Blog</span>
                </AnchorLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <div className="d-flex align-items-center">
                <CustomNavLink to="#!">
                  <MDBIcon fab icon="facebook" className="ml-1" />
                </CustomNavLink>
                <CustomNavLink to="#!">
                  <MDBIcon fab icon="twitter" className="ml-1" />
                </CustomNavLink>
                <CustomNavLink to="#!">
                  <MDBIcon fab icon="linkedin" className="ml-1" />
                </CustomNavLink>
              </div>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>        
    );
  }
}

export default NavbarPage;
