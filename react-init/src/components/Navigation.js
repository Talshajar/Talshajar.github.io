import React from "react";
import { BrowserRouter  } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { HashLink as Link  } from 'react-router-hash-link';
import styled from 'styled-components';

const NAV = styled.div`
background-color: white;
`

const Navigation = () => (
  <BrowserRouter>
<NAV>
    <MDBNav className="justify-content-center">
       <MDBNavItem>
            <MDBNavLink> 
                <Link to={"#HomeId"} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} > Home </Link>
            </MDBNavLink>
      </MDBNavItem>

      <MDBNavItem>
            <MDBNavLink> 
                <Link to={"#aboutMeId"} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} > About me </Link>
            </MDBNavLink>
      </MDBNavItem>

      <MDBNavItem>
            <MDBNavLink> 
                <Link to={"#superProjectsId"} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} > Projects </Link>
            </MDBNavLink>
      </MDBNavItem>

      <MDBNavItem>
             <MDBNavLink> 
                <Link to={"#ContactPageId"} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} > Get in touch </Link>
            </MDBNavLink>
      </MDBNavItem>

      <MDBNavItem>
        <MDBNavLink to="#!"> Blog </MDBNavLink>
      </MDBNavItem>
    </MDBNav>
    </NAV>
  </BrowserRouter>
)

export default Navigation;