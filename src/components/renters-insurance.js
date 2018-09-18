import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/advice.css';
export class RentersInsurance extends React.Component {

  render (){
    return (
      <div className="advice-container">
            <Header />
            <h1 className='advice-title'>Renter's Insurance</h1>
            <img src={require('../images/renters-insurance.jpg')} alt="LA area"  className="advice-img"/>

            <p className="advice-description">
            Your landlord’s property insurance won’t help you if disaster strikes. 
            It covers the structure, but not any of your things. 
            Renters insurance covers your belongings from all the possible bad events that are listed in the policy, such as fire, smoke, water damage, windstorms, lightning, theft and vandalism.<br /> <br />
            
            Even if you don’t think your stuff is worth that much, renters insurance is a good idea. 
            The cost of replacing just a basic wardrobe and only a few pieces of furniture adds up quickly.
            Plus renters insurance covers more than your personal belongings at home. <br /> <br />
            
            Here are seven other things a policy covers:<br /> <br />
            </p>
            <ol>
            
            <li>Hotel costs after a disaster</li>
            <li>Medical expenses for injured guests</li>
            <li>Damage your kid causes others</li>
            <li>Legal costs if you’re sued</li>
            <li>Dog bites</li>
            <li>Stuff you’ve rented or borrowed</li>
            <li>Belongings away from home</li>
            
            </ol>
           
            <Footer />

      </div>
    );
  }
}

export default RentersInsurance;