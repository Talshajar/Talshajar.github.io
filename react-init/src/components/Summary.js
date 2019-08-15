import React, { Component } from 'react';
import weekday from '../utils/weekday';


class Summary extends Component {
    render() {
        return (
            <section id="aboutMeId">
                <h4>Resumen</h4>
                <p> Soy desarrolladora Front End. Mi background en Mercadotecnia y visual merchandising,
                     aporta a mi carrera en tecnologia, la visión de atención a los detalles para que 
                     los productos logren conectar con las necesidades de los usuarios.
                     Si estas interesado en mi trabajo no dudes en mandarme un mensaje a contact@rociochavoya.com <p>
                         <strong>Have a nice {weekday()}</strong></p>  </p> 
               
            </section>
        )  
    }
}

export default Summary