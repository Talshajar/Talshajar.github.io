import React from "react";
import { BrowserRouter , Link } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";




const Navigation = () => (
  <BrowserRouter>

    <MDBNav className="justify-content-center">
      <MDBNavItem>
        <MDBNavLink> <Link to="/Projects"> About me </Link> </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!"> Projects </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!"> Contact </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!"> Blog </MDBNavLink>
      </MDBNavItem>
    </MDBNav>

  </BrowserRouter>
)

export default Navigation;