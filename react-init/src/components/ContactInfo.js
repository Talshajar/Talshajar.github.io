import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <ul className="contactinfo">
                <li className="contactinfo__single" target="_blank">
                    <i className="ion-ios-location-outline contactinfo__icon"></i>
                    <span className="contactinfo__title">Guadalajara, México.</span>
                </li>
                <li className="contactinfo__single" target="_blank">
                    <i className="ion-ios-email-outline contactinfo__icon"></i>
                    <span className="contactinfo__title">rocio.chavoya@gmail.com</span>
                </li>
                <li className="contactinfo__single" target="_blank">
                    <i className="ion-social-github-outline contactinfo__icon"></i>
                    <span className="contactinfo__title">Talshajar</span>
                </li>
                <li className="contactinfo__single" target="_blank">
                    <i className="ion-social-linkedin-outline contactinfo__icon"></i>
                    <span className="contactinfo__title">rociochavoya</span>
                </li>
            </ul>
        )  
    }
}

export default ContactInfo