import React, { Component } from 'react';
import TextLoop from 'react-text-loop';
import weekday from '../utils/weekday';


class Home extends Component {

 


    render() {

        return (
            <div>
               <h1>Rocio Chavoya</h1>
               <TextLoop interval={1500} children={["Developer Front End", "UX Designer", "Digital Marketing", "Visual Merchandiser"]} />
               <p><strong>Have a nice {weekday()}</strong></p>
            </div>
        )  
    }
}

export default Home




