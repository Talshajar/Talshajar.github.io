import React, { Component } from 'react';
import TextLoop from 'react-text-loop';
import weekday from '../utils/weekday';


class Home extends Component {

 


    render() {

        return (
            <div>
               <h1>Rocio Chavoya</h1>
               <TextLoop interval={1500} children={["Front End Developer", "UX Designer", "User Researcher", "Digital Marketer", "Visual Merchandiser"]} />
               <p><strong>Have a nice {weekday()}</strong></p>
            </div>
        )  
    }
}

export default Home




