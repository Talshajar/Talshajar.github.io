import React, { Component } from 'react';
// import superb from 'superb'
import weekday from '../utils/weekday';


class Home extends Component {


    render() {
        return (
            <div>
               <h1>Rocio Chavoya</h1>
               <p ><strong> {weekday()}</strong></p>
            </div>
        )  
    }
}

export default Home




