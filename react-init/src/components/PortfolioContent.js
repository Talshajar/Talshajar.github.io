import React, { Component } from 'react';
// import { genericHashLink } from 'react-router-hash-link';

import Header from './Header';
import Navigation from '../components/Navigation';
import Summary from './Summary';
import SkillsList from './SkillsList';
import EducationHistory from './EducationHistory';
import MyProjects from '../components/MyProjects';
// import SuperProjects from './ProjectList';
// import ContactPage from '../components/Contact';
import FooterPage from '../components/Footer';
import styled from 'styled-components';


const MainHeaderStyled = styled.div`
color: black;
height: 80px;
background-color: white;
width: 55%; /* hacemos que la cabecera ocupe el ancho completo de la página */
right: 0; /* Posicionamos la cabecera al lado izquierdo */
top: 0; /* Posicionamos la cabecera pegada arriba */
position: fixed; /* Hacemos que la cabecera tenga una posición fija */
`
const MainBodyStyled = styled.div`
margin-top: 100px;
margin-bottom: 200px;
margin-left:330px;
`

class PortfolioContent extends Component {
    render() {
        const { 
            skills, 
            eduList ,  
            // projectList
        } = this.props
        return (
            <div className="portfolio-content">

                <MainHeaderStyled  className="sticky-top">
                    <Header />
                    <Navigation />
                </MainHeaderStyled>

<MainBodyStyled>
                </MainBodyStyled>                

                <Summary/>

                {/* <ContactPage /> */}
                
                <SkillsList skills={skills}/>
                
                <EducationHistory eduList={eduList}/>

                <MyProjects />

                {/* <SuperProjects  projectList={ projectList} /> */}

               

                <FooterPage />
            </div>
        )  
    }
}

export default PortfolioContent