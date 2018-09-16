import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/advice.css';
export class AgingParents extends React.Component {

  render (){
    return (
      <div className="advice-container">
            <Header />
            <h1 className='advice-title'>Taking Care of Aging Parents and Yourself</h1>
            <img src={require('../images/aging-parents.jpeg')} alt="LA area"  className="advice-img"/>

            <p className="advice-description">
            Wouldn’t you feel more at ease knowing your loved ones can live out their golden years with the quality of life they deserve? 
            If you’re not certain about their financially security, perhaps it’s time to give life insurance another look.<br /> <br />
            
            A 2013 Study by Pew Research found that about one in seven middle aged adults is providing financial support to both a child and an aging parent. 
            Perhaps your parents would be unable to keep up with their utility bills, pay their property taxes, cover their health care costs, remain in a skilled nursing facility, or take care of their day-to-day living expenses. 
            Life insurance providers will want you to explain what is at stake for your parents, if your income would no longer be there to help support them. <br /> <br /> 
            
            Whether you’re married with kids or single, do your homework now rather than later. 
            That’s your first step in calculating the amount of coverage and choosing the right policy. 
            You need to know what your parents cannot pay for in your absence.  
            This can be a difficult conversation but one that must be discussed. 
            Once you can answer these questions, a consultation can help explain which life insurances will serve you and your family best.
</p>
            <Footer />

      </div>
    );
  }
}

export default AgingParents;