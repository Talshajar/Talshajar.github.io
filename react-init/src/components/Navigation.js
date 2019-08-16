import React, { Component } from 'react';
import { MDBHamburgerToggler, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link  } from 'react-router-hash-link';

class Navigation extends Component {
state = {
  collapse1: false,
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

toggleSingleCollapse = collapseId => {
  this.setState({
    ...this.state,
    [collapseId]: !this.state[collapseId]
  });
}

render() {
  return (
    <Router>
      <MDBContainer>
        <MDBNavbar color="#bdbdbd grey lighten-1" style={{ marginTop: '20px' }} light>
          <MDBContainer>
            <MDBNavbarBrand>
              <h3 className="py-3 font-weight-bold">
                <strong>Portafolio</strong>
              </h3>
            </MDBNavbarBrand>
            <MDBHamburgerToggler color="black" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
              <MDBCollapse isOpen={this.state.collapse1} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                  <MDBNavLink> 
                  <Link to={"#aboutMeId"} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} > About me </Link>
                 </MDBNavLink>
                  
                  <MDBNavLink> 
                <Link to={"#superProjectsId"} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} > Projects </Link>
            </MDBNavLink>
            <MDBNavLink> 
                <Link to={"#ContactId"} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} > Get in touch </Link>
            </MDBNavLink>
            </MDBNavItem >
                </MDBNavbarNav>
              </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    </Router>
    );
  }
}

export default Navigation;