import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/advice.css';
export class SpousalDeath extends React.Component {

  render (){
    return (
      <div className="advice-container">
            <Header />
            <h1 className='advice-title'>Spousal Death</h1>
            <img src={require('../images/spousal.jpg')} alt="LA area"  className="advice-img"/>

            <p className="advice-description">
            You can take the first step by notifying the appropriate government agencies. <br /> <br />
            If you were married to the deceased for at least 10 years, the surviving spouse (and even ex-spouse) and surviving children may qualify to receive a one time $255 death benefit from the Social Security Administration. <br /> <br />
            Inquire about survivor benefits that may be available for children under 16 years of age or disabled children of any age.  <br /> <br />
            If the deceased served in the armed forces, there may be Veteran’s Administration survivor benefits that the spouse and children may be entitled to. <br /> <br />
            I like to help my clients during this process, because it be difficult figuring out where to start. <br /> <br />
            My consultations are geared towards simplifying this process for my clients.<br /> <br />
            </p>
            <Footer />

      </div>
    );
  }
}

export default SpousalDeath;