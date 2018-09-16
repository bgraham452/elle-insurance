import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/advice.css';
export class DivorcedRetirement extends React.Component {

  render (){
    return (
      <div className="advice-container">
            <Header />
            <h1 className='advice-title'>Retirement Plan for Divorced Parents</h1>
            <img src={require('../images/divorced-retirement.jpg')} alt="LA area"  className="advice-img"/>

            <p className="advice-description">This is critical.  
            As life changes so does your financial plan.  
            Social Security will offer very little to cover living expenses. 
            First, you need to STOP procrastinating! 
            The longer you wait, the less time for your money to grow by the time you retire. <br /> <br /> 

            For example:  If you can stash away $100 a month into a retirement vehicle at age 27, you’ll have $240,000 at age 67, with a 7% per year growth.
            Stashing at age 37, you’ll have $115,000 at age 67.  <br /> <br /> 

            Start by putting money away in an IRA account.  
            You must own this account for at least 5 years and reach the age of 59 ½ before you can begin making tax free withdrawals.<br /> <br /> 

            Many people do not view life insurance as an essential part of a retirement plan, but instead see life insurance as just a way to protect families from the early loss of the family’s bread winner. 
            Life insurance can be so much more valuable, if you know how to use it!  <br /> <br /> 
            It has the potential to protect your income, provide tax free cash flow, and can help manage your taxes because of the preferential tax treatment. 
            With tax rates constantly changing life insurance can serve as a hedge against a rising tax environment. 
            Schedule a consultation to see what works best for you and retire comfortably.
            </p>
            <Footer />

      </div>
    );
  }
}

export default DivorcedRetirement;