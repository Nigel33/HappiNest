import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBIcon } from "mdbreact";
import CustomNavLink from './customLink';

const Footer = () => {
    return (
        <div className="green-background">
            <MDBContainer>                                 
            <MDBRow className="pb-3">
                <MDBCol md="12">
                    <div className="mb-5 flex-center">
                        <CustomNavLink to="https://www.facebook.com/happinestgames/?ref=py_c" target="_blank">
                            <MDBIcon fab icon="facebook-f" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon>      
                        </CustomNavLink>
                        <CustomNavLink to="https://www.instagram.com/happinest.games/" target="_blank">
                            <MDBIcon fab icon="instagram" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon>   
                        </CustomNavLink>
                        <CustomNavLink to="https://api.whatsapp.com/send?phone=+60176373108&text=%20Hello" target="_blank">
                            <MDBIcon fab icon="whatsapp" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon>                          
                        </CustomNavLink>                                              
                    </div>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid className="text-light">
                    &copy; {new Date().getFullYear()} Copyright: HappiNestGames                             
                </MDBContainer>
            </div>
        </div>
    );
}

export default Footer;