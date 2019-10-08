import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link  } from 'react-router-hash-link';

class Navigation extends Component {

render() {
  return (
    <Router>          
    <Link to={"#aboutMeId"} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} > About me </Link>
                
    <Link to={"#superProjectsId"} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} > Projects </Link>
           
    <Link to={"#ContactId"} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} > Get in touch </Link>
            
      
    </Router>
    );
  }
}

export default Navigation;