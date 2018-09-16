import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/advice.css';
export class NewLifeInsurance extends React.Component {

  render (){
    return (
      <div className="advice-container">
            <Header />
            <h1 className='advice-title'>Life Insurance for New Parents</h1>
            <img src={require('../images/newparents.jpg')} alt="LA area"  className="advice-img"/>

            <p className="advice-description">Speaking from experience, I fell in love with my first born child and I fell in love again with the birth of my second child.
            I felt so complete, so happy, and I made a promise that I would do my absolute best to care, love, nurture and protect my children. 
            One way to protect your child financially speaking is to assure the child will be able to live the same lifestyle you are providing them. 
            In the event something happens to you or your spouse, you don’t want the financial caring of your children to be a burden on family members. 
            Most married Americans do not understand how expensive it is to raise a child! 
            Purchasing life insurance allows you to still support and provide for your child financially in your absence. 
            Our personalized consultation will provide details on how to purchase the best plan that fits your family’s needs.
            </p>
            <Footer />

      </div>
    );
  }
}

export default NewLifeInsurance;