import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="grey" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">SPECIAL THANKS:</h5>
            <p>
              ...to My Family, to Laboratoria and to my Laboratoria's partners.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">SOCIAL NETWORKS:</h5>
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
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/posts/rociochavoya_mi-curriculum-activity-6562067349548204032-uhFi"> <i class="fas fa-download"></i>  CV </a>
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