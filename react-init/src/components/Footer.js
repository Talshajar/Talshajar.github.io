import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="grey" className="font-small pt-4 mt-4" >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title" id="ContactId">Especiales gracias:</h5>
            <p>
              ...a mi familia, a Laboratoria y a mis compñeras.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Redes Sociales:</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/in/rociochavoya/"> <i class="fab fa-linkedin"></i> LinkedIn  </a> 
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/rociochavoya"> <i class="fab fa-github"></i> GitHub  </a>  
              </li>
              <li className="list-unstyled">
                <a href="https://twitter.com/ChavoyaRocio"> <i class="fab fa-twitter-square"></i> Twitter</a>  
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.rociochavoya.com"> rociochavoya.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;