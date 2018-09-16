import React from 'react';
import Header from './header';
import Footer from './footer';

import '../styles/about.css';
export class AllAboutElle extends React.Component {

  render(){
    return (
      <div className="about-container">
      <Header />
      <h1 className="about-title">Let's Talk About It NOW!</h1>

      <h3 className="about-intro"><i>Elle Flores - life, health, property & casualty insurance agent</i></h3>
      <img src={require('../images/about-elle-1.jpeg')} alt="LA area"  className="about-img"/>

      <p className="about-text">
      Having over 7 years experience, I’ve seen people make good decisions planning their financial house. <br /> <br />
      
      I’ve also seen people choose not to make a decision to protect what they’ve worked so hard for all their lives.<br /> <br />
      
      I’ve received calls from people who sat down with me once or twice before their financial challenges occurred, but never made a decision to plan their financial house and now they need insurance AFTER the incident has occurred.<br /> <br />
      
      Always remember: <b>You Can’t Buy Insurance After the House Has Burned Down.</b> <br /> <br />
      
      This is why I do what I do.<br /> <br />
      
      I sit down and educate my clients why they absolutely CANNOT ignore organizing their finances.<br /> <br />
      
      I’ve learned the hard way how painful it is NOT to have prepared myself in my early 20’s & it's why I like talking to young people and educating them about the importance of getting their financial house in order NOW that they are young.<br /> <br />
      
      Financial struggles can be AVOIDED by becoming educated about money, particularly your financial house.<br /> <br />
      
      Waiting to plan out your financial house in your 40’s and 50’s is more expensive and you’ve lost a good portion of time to build for your future retirement.  <br /> <br />
      
      So let’s talk about it NOW!<br /> <br />
      </p>

      <img src={require('../images/about-elle-2.jpeg')} alt="LA area"  className="about-img"/>
      
      <p className="about-text">
      I live and work in the San Fernando Valley with a team that specialize in educating my young clients to avoid financial struggles and avoid not having enough for retirement.<br /> <br />
      
      I educate people of all age groups to paint a clear financial picture to make sound decisions no matter what their age.<br /> <br />
      </p>

      <Footer />
      </div>
    );
  }
}

export default AllAboutElle;