import React from 'react';
import {Link} from 'react-router-dom';


import Header from './header';
import Footer from './footer';
import '../styles/scenarios.css';
export class FindScenario extends React.Component {

  render(){
    return (
      <div className="scenarios-container">
         <Header />
      <h1 className="scenarios-title">Find Your Financial Scenario</h1>

      <p className="scenarios-subtext">Whether your a new parent, an employee looking for benefits outside of your job, or were recently in an automobile accident, Elle is here to make sure you are prepared for any situation that may come your way.
      Find the situation that matches you and let's get you Elle-insured.  </p>

      <div className="scenarios" id="supplemental">
      <img src={require('../images/supplemental-scenario.jpg')} alt="LA area"  className="scenario-img"/>
      <h2>Supplemental Benefits</h2>
      <p>
      You have a good income but your employer does not offer supplemental benefits to cover the gaps that major medical does not cover.
      </p>
      <button><Link to="/supplemental-benefits">Learn More</Link></button>
      </div>

      <div className="scenarios" id="spousal">
      <img src={require('../images/spousal-scenario.jpg')} alt="LA area"  className="scenario-img"/>
      <h2>Spousal Death</h2>
      <p>
      You have a 30 year term mortgage payment on the property you call home. 
      Your spouse passes away. 
      You don't make enough money to pay the bills and the mortgage.
      </p>
      <button><Link to="/spousal-death">Learn More</Link></button>
      </div>

      <div className="scenarios" id="new-parents">
      <img src={require('../images/newparents-scenario.jpg')} alt="LA area"  className="scenario-img"/>
      <h2>Life Insurance for New Parents</h2>
      <p>
      Now that you're married with your first born child, you would like to start a life insurance policy, because now that you are a new parent you realize if you or your spouse should pass, how will your child go without you and the income your child depends on just to live.
      </p>
      <button><Link to="/life-insurance-for-new-parents">Learn More</Link></button>
      </div>

       <div className="scenarios" id="parents-second-child">
      <img src={require('../images/second-child-scenario.jpg')} alt="LA area"  className="scenario-img"/>
      <h2>Life Insurance for Parents With A Second Child</h2>
      <p>
      You are married and your second child is born, you've been meaning to start a life insurance policy for your first born, but never found time to do it and your 2nd child is here.
      </p>
      <button><Link to="/life-insurance-for-parents-with-a-2nd-child">Learn More</Link></button>
      </div>

      <div className="scenarios" id="divorced-retirement">
      <img src={require('../images/divorced-retirement-scenario.png')} alt="LA area"  className="scenario-img"/>
      <h2>Retirement Plan for Divorced Parents</h2>
      <p>
      You are divorced with children, and were never at a job that offered you some type of retirement. 
      You realize life is passing you by and you need to begin a retirement account.
      </p>
      <button><Link to="/retirement-plan-for-divorced-parents">Learn More</Link></button>
      </div>

       <div className="scenarios" id="aging-parents">
      <img src={require('../images/aging-parents-scenario.jpg')} alt="LA area"  className="scenario-img"/>
      <h2>Taking Care of Aging Parents and Yourself</h2>
      <p>
      While taking care of your aging grandparents or parents, you learn that they don't have a retirement plan in place or they have a very small retirement nest egg. 
      Between work and taking care of your parents/grandparents, you don't have time for much else and your income is struggling to make ends meet. 
      You don't want to be in the same situation when you reach retirement, and you know you must do something.
      </p>
      <button><Link to="/taking-care-of-aging-parents-and-self">Learn More</Link></button>
      </div>

       <div className="scenarios" id="auto-coverage">
      <img src={require('../images/auto-coverage-scenario.png')} alt="LA area"  className="scenario-img"/>
      <h2>Lack of Automobile Coverage After Accident</h2>
      <p>
      You were involved in an automobile accident and you realize you don't have enough coverage so now you have to pay money out of your own pocket. 
      Or you thought you purchased full auto insurance coverage, but realize after your car has been hit by an uninsured motorist, that your auto insurance won't cover the damage because you didn't carry uninsured motorist coverage.
      </p>
      <button><Link to="/lack-of-automobile-coverage-after-accident">Learn More</Link></button>
      </div>

      <div className="scenarios" id="renters-insurance">
      <img src={require('../images/renters-insurance-scenario.jpg')} alt="LA area"  className="scenario-img"/>
      <h2>Renter's Insurance</h2>
      <p>
      I am renting an apartment/house/etc, and I need to purchase a renter's insurance policy.
      </p>
      <button><Link to="/renters-insurance">Learn More</Link></button>
      </div>

      <div className="scenarios" id="health-insurance">
      <img src={require('../images/health-insurance-scenario.jpg')} alt="LA area"  className="scenario-img"/>
      <h2>Lack of Health Insurance</h2>
      <p>
      You were in a motorcycle accident, had surgery done, and didn't purchase health insurance during open enrollment. 
      Now you have to pay the medical bills and the penalty for not having health insurance.
      </p>
      <button><Link to="/lack-of-health-insurance">Learn More</Link></button>
      </div>
   <Footer />
      </div>
    );
  }

}
export default FindScenario;