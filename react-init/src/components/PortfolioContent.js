import React, { Component } from 'react';

import Header from './Header';
import Summary from './Summary';
import ContactInfo from './ContactInfo';
import SkillsList from './SkillsList';
import EducationHistory from './EducationHistory';

class PortfolioContent extends Component {
    render() {
        const { skills, eduList } = this.props
        return (
            <div className="portfolio-content">
                
                <Header/>

                <Summary/>

                <section>
                    <ContactInfo/>
                </section>
                
                <SkillsList skills={skills}/>
                
                <EducationHistory eduList={eduList}/>
                
            </div>
        )  
    }
}

export default PortfolioContent