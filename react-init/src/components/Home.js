import React, { Component } from 'react';
import superb from 'superb'
import weekday from '../utils/weekday';
import words from '../utils/words.json';

class Home extends Component {

 


    render() {

        return (
            <div>
               <h1>Rocio Chavoya</h1>
               <p><strong>Have a nice <span ref="word">{superb.words}</span> {weekday()}</strong></p>
            </div>
        )  
    }
}

export default Home




