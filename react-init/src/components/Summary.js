import React, { Component } from 'react';
import weekday from '../utils/weekday';


class Summary extends Component {
    render() {
        return (
            <section id="aboutMeId">
                <h4>Resumen</h4>
                <p> If you are interested in my work, please fell free to contact me. I'll be glad to know more about you and your project. <p><strong>Have a nice {weekday()}</strong></p>  </p> 
               
            </section>
        )  
    }
}

export default Summary