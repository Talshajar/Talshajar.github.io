import React, { Component } from 'react';
import weekday from '../utils/weekday';


class Summary extends Component {
    render() {
        return (
            <section id="aboutMeId">
                <h4>Resumen</h4>
                <p> Hi! How are you?...... i glad to hear that <p><strong>Have a nice {weekday()}</strong></p>  </p> 
               
            </section>
        )  
    }
}

export default Summary