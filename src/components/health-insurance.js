import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/advice.css';
export class HealthInsurance extends React.Component {

  render (){
    return (
      <div className="advice-container">
            <Header />
            <h1 className='advice-title'>Lack of Health Insurance</h1>
            <img src={require('../images/health-insurance.jpg')} alt="LA area"  className="advice-img"/>

            <p className="advice-description">
            Chances are you didn’t have the appropriate coverage, either your auto insurance agent did not advise you well, or you declined the coverage. 
            
            Now, you are in a big mess!<br /><br />
            
            Paying a ridiculously low monthly payment has big consequences and some people learn the hard way. 
            This is what you need to know to avoid this scenario in the future.<br /><br />
            
            An auto insurance policy can include several different kinds of coverage.  
            Your independent insurance agent will provide professional advice on the type and amount of car insurance coverage you should have to meet your individual needs and comply with the laws of your state.  
            Here are the principal kinds of coverage that your policy may include: <br /><br />
            </p>

            <ul>
             <li> Liability for Bodily Injury</li>
             <li>Liability for Property Damage</li>
             <li>Collision</li>
             <li>Comprehensive</li>
             <li>Medical Expenses</li>
             <li>Uninsured/Underinsured Motorist Coverage</li>
             <li>Personal Injury Protection (“PIP” or “No-fault”)</li>
             </ul>

            <Footer />

      </div>
    );
  }
}

export default HealthInsurance;