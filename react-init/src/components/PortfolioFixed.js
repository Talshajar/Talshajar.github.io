import React, { Component } from 'react';

import TextLoop from 'react-text-loop';
import styled from 'styled-components';

const TitleStyled = styled.h1`
@import url('https://fonts.googleapis.com/css?family=Adamina|Dancing+Script|Indie+Flower|Londrina+Shadow&display=swap');
font-family: 'Adamina', serif;
font-size: 98px;
color: white;
`





class PortfolioFixed extends Component {
    render() {
        return (

            <div className="portfolio-fixed">
                <img alt='RocioChavoya' src="https://drive.google.com/file/d/1HhbKZz-JItKLoM9SCP69EiD66f9Hkra2/view?usp=sharing"/>
                <TitleStyled><h1>Rocio Chavoya</h1></TitleStyled>
               <TextLoop interval={1500} children={["Front End Developer", "UX Designer", "User Researcher", "Digital Marketer", "Visual Merchandiser"]} />
            </div>
        )  
    }
}

export default PortfolioFixed