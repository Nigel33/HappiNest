import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBIcon } from "mdbreact";

const Footer = () => {
    return (
        <div className="green-background">
            <MDBContainer>                                 
            <MDBRow className="pb-3">
                <MDBCol md="12">
                    <div className="mb-5 flex-center">
                        <MDBIcon fab icon="facebook-f" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon>                        
                        <MDBIcon fab icon="google-plus-g" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon>                        
                        <MDBIcon fab icon="instagram" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon>   
                        <MDBIcon fab icon="whatsapp" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon>                      
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