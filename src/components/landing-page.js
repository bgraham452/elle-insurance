import React from 'react';
import '../styles/landing-page.css';
import {Link} from 'react-router-dom';
export default class LandingPage extends React.Component {

constructor(props){
super(props);
this.state = {
    advice: '',
   info: ''
}
}

redirectToContact(e){
    this.setState({
        advice: e.target.value
    }, function (){
        console.log(this.state.advice);
        window.location = window.location.href + this.state.advice;
    })
}
redirectToPage(e){
    this.setState({
        info: e.target.value
    }, function (){
        console.log(this.state.info);
        window.location = window.location.href + this.state.info;
    })
}

render (){

    return (

            <section className="overlay">
            <div className="landing-container"> 
<h2 className="logo"><u>ELLE'S FINANCIAL CONSULTATION</u></h2>
<h1 className="sub-text">Need financial advice?</h1>

<div className="financialContainer">
<div className="financeAdvice">
<p>I am interested in:</p>
 <select className="financialDropdown" value={this.state.advice} onChange={(e) => this.redirectToContact(e)}>
                    <option>Select Insurance Type:</option>
                    <option value="contact">Getting Life Insurance</option>
                    <option value="contact">Coverage for Senior Citizens</option>
                    <option value="contact">Car Insurance</option>
                    <option value="contact">Health Insurance</option>
                    <option value="contact">Renter's Insurance</option>
                </select>
</div>

<div className="more-info">
<p>I want to know more about:</p>
<select className="moreInfoDropdown" value={this.state.info} onChange={(e) => this.redirectToPage(e)}>
                    <option>Find more info on:</option>
                    <option value="supplemental-benefits">Supplemental Benefits at Work</option>
                    <option value="spousal-death">What to do if my spouse passes away?</option>
                    <option value="life-insurance-for-new-parents">Life insurance as a new parent</option>
                    <option value="life-insurance-for-parents-with-a-2nd-child">Life insurance for parents</option>
                    <option value="taking-care-of-aging-parents-and-self">Taking care of aging parents</option>
                    <option value="lack-of-automobile-coverage-after-accident">What happens if I don’t have car insurance?</option>
                    <option value="lack-of-health-insurance">What happens if I don’t have health insurance?</option>
                    <option value="renters-insurance">Renter’s Insurance</option>

                </select>
            </div>
            </div>
            <h3 className="call-to-action"><Link to='/index'><b>Click Here to Visit Main Site</b></Link></h3>

            <h3 className="tagline"><b><i>Go Beyond Well Insured. Get Elle-Insured.</i></b></h3>

            </div>
            </section>
        
    );
}
}