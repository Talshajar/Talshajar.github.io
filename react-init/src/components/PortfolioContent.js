import React, { Component } from 'react';
// import { genericHashLink } from 'react-router-hash-link';

import Header from './Header';
import Navigation from '../components/Navigation';
import Home from './Home';
import Summary from './Summary';
import SkillsList from './SkillsList';
import EducationHistory from './EducationHistory';
import SuperProjects from './ProjectList';
import ContactPage from '../components/Contact';
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
margin-top: 200px;
margin-bottom: 200px;
margin-left:330px;
`

class PortfolioContent extends Component {
    render() {
        const { skills, eduList ,  projectList} = this.props
        return (
            <div className="portfolio-content">

                <MainHeaderStyled>
                    <Header />
                    <Navigation />
                </MainHeaderStyled>

<MainBodyStyled>
                <Home  />
                </MainBodyStyled>                

                <Summary/>
                
                <SkillsList skills={skills}/>
                
                <EducationHistory eduList={eduList}/>

                <SuperProjects  projectList={ projectList} />

                <ContactPage />

                <FooterPage />
            </div>
        )  
    }
}

export default PortfolioContent