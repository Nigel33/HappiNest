import React, { Component } from "react";
import {
  MDBContainer, MDBNavbar,  MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import CustomNavLink from './customLink';
import logo from "../images/logo.png";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <MDBNavbar hg-navbar expand="md">
        <MDBContainer>                    
          <CustomNavLink to="/" className="navbar-brand">
            <img src={logo} style={{height: '50px'}} alt="Responsive image" />
          </CustomNavLink>
          <MDBNavbarToggler name="navbar-toggler" onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavbarNav left>
                <CustomNavLink to="#!">Home</CustomNavLink>
                <CustomNavLink to="/">Buy AIEOU</CustomNavLink>
                <CustomNavLink to="/about/">About Us</CustomNavLink>
                <CustomNavLink to="#!">Contact Us</CustomNavLink>
                <CustomNavLink to="#!">Subscribe</CustomNavLink>
                <CustomNavLink to="#!">Blog</CustomNavLink>
                {/* <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline">Blog</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu right>
                      <MDBDropdownItem href="#!">News</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Sign Up</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem> */}
              </MDBNavbarNav>
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
