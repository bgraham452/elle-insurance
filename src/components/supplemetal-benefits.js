import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/advice.css';
export class SupplementalBenefits extends React.Component {

  render (){
    return (
      <div className="advice-container">
            <Header />
            <h1 className='advice-title'>Supplemental Benefits</h1>
            <img src={require('../images/benefits.jpg')} alt="LA area"  className="advice-img"/>

            <p className="advice-description">Based on your insurance provider, this amount may be as little as $1,000.00 deductible for an individual or for a family of four $6,200. 
            The best solution?  Supplemental voluntary benefits (VB). 
            If you’re ever sent to the hospital for an emergency, like an automobile accident, you are eligible to have the cost of your deductible covered. 
            You will continue to receive payments when you submit documentation for continued medical attention. 
            All you would have to do is submit a claim with a voluntary benefits provider within 24 to 48 hours after your first hospital visit. 
            This is a little-known gold nugget not most Americans know about.</p>
            <Footer />

      </div>
    );
  }
}

export default SupplementalBenefits;