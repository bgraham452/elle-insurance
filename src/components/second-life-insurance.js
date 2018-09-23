import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/advice.css';
export class SecondLifeInsurance extends React.Component {

  render (){
    return (
      <div className="advice-container">
            <Header />
            <h1 className='advice-title'>Life Insurance for Parents with A Second Child</h1>
            <img src={require('../images/second-child.jpg')} alt="LA area"  className="advice-img"/>

            <p className="advice-description">You are leaving your children exposed to financial hardship in your absence when you neglect to protect your children for their future.  
            STOP procrastinating, and purchase life insurance for each spouse as well as on each child. 
            Reasons to purchase life insurance for your children: <br /> <br />
            </p>
            <ul className="advice-list">
            <li>In the event your child passes away, a life insurance policy provides the funds to pay for funeral expenses, family counseling, medical bills and provide money to pay for living expenses if one parent or both parents need to take leave from work. <br /> <br /></li>
            
            <li>A child who develops a medical problem early in life may have difficulty qualifying for life insurance as they get older.
            Purchasing life insurance for your child guarantees the child has some coverage and can buy more as an adult regardless of health.
            This is one of the main reasons people purchase life insurance on their children. <br /> <br /></li>
            
            <li>The savings component of permanent life insurance (cash value) grows tax deferred.  
            The policy owner can borrow against the cash value or can even surrender the policy minus fees.
            The cash can be used to cover unexpected expenses, or toward college expenses or a down payment of a home or you can save that money as a nest egg.
            A permanent life insurance policy guarantees a certain percentage return on the cash value and in many cases can surpass the performance of other traditional investment tools. <br /> <br /></li>
            
            <li>When parents are dependent on the income of a child, should that child passaway it would become a financial hardship for the parents.  
            Purchasing permanent life insurance would provide the funds necessary that parents or a parent may be depended on.</li>
            </ul>
          
            <Footer />

      </div>
    );
  }
}

export default SecondLifeInsurance;