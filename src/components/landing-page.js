import React from 'react';
import '../styles/landing-page.css';
import {Link} from 'react-router-dom';
export default class LandingPage extends React.Component {

constructor(props){
super(props);
this.state = {
    advice: '',
    zip: 12345,
    city: '',
    state: ''
}
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
 <select className="financialDropdown" value={this.state.sort} onChange={(e) => this.sort(e)}>
                    <option>Select Insurance Type:</option>
                    <option>Supplemental Benefits at Work</option>
                    <option>Protecting Against Spousal Death</option>
                    <option>Life Insurance (New Parents)</option>
                    <option>Life Insurance (Parents w/ 2nd child)</option>
                    <option>Taking Care Of Aging Parents</option>
                    <option>A Lack Of Automobile Coverage After An Accident</option>
                    <option>A Lack of Health Insurance</option>
                    <option>Renter's Insurance</option>
                </select>
</div>

<div className="agent-finder">
<p>I want to find an Elle-insured agent:</p>
<form className="agent-form" onSubmit={(e) => this.search(this.props.category, this.props.position, e)}>
                    <input type="search" className="agent-search" ref={input => this.input = input}  placeholder="Enter Zip, City, or State..." />
                    <button className="submit">Submit</button>
                </form>

            </div>
            </div>
            <h3 className="call-to-action"><Link to='/index'><b>Click Here to Visit Main Site</b></Link></h3>

            <h3 className="tagline"><b><i>Go Beyond Well Insured. Get Elle-Insured.</i></b></h3>

            </div>
            </section>
        
    );
}
}