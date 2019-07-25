import React, { Component } from 'react';

import Particles from 'react-particles-js';
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
                <Particles
                 params={{
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": false
                            }
                        },

                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 0.5,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }}  />
                <img alt='RocioChavoya' src="https://scontent.fgdl4-1.fna.fbcdn.net/v/t1.0-9/205315_344012635679395_1270711553_n.jpg?_nc_cat=106&_nc_ht=scontent.fgdl4-1.fna&oh=cf395308a084aef6349bc62ee9b1f195&oe=5D9FC059"/>
                <TitleStyled><h1>Rocio Chavoya</h1></TitleStyled>
               <TextLoop interval={1500} children={["Front End Developer", "UX Designer", "User Researcher", "Digital Marketer", "Visual Merchandiser"]} />
            </div>
        )  
    }
}

export default PortfolioFixed