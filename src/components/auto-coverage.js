import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/advice.css';
export class AutoCoverage extends React.Component {

  render (){
    return (
      <div className="advice-container">
            <Header />
            <h1 className='advice-title'>Lack of Automobile Coverage After Accident </h1>
            <img src={require('../images/automobile-accident.jpg')} alt="LA area"  className="advice-img"/>

            <p className="advice-description">
            Chances are you didn’t have the appropriate coverage, either your auto insurance agent did not advise you well, or you declined the coverage. <br /> <br />
            
            Now, you are in a big mess!<br /> <br />
            
            Paying a ridiculously low monthly payment has big consequences and some people learn the hard way. 
            This is what you need to know to avoid this scenario in the future.<br /> <br />
            
            An auto insurance policy can include several different kinds of coverage.  
            Your independent insurance agent will provide professional advice on the type and amount of car insurance coverage you should have to meet your individual needs and comply with the laws of your state.  
            Here are the principal kinds of coverage that your policy may include: <br /> <br />
            
            <b>Liability for Bodily Injury</b> – The minimum coverage for bodily injury varies by state and may be as low as $10,000 per person or $20,000 per accident.  
            Many auto policies stop at a maximum of $300,000 or $500,000 per accident for Liability coverage.  
            If you injure someone with your car, you could be sued for a lot of money.  
            The amount of Liability coverage you carry should be high enough to protect your assets in the event of an accident.  
            Most experts recommend a limit of at least $100,000/$300,000, but that may not be enough.<br /> <br />
            
            This is no place for cheap auto insurance. 
            If you have a million-dollar house, you could lose it in a lawsuit if your insurance coverage is insufficient.  
            You can get additional coverage with a Personal Umbrella or Personal Excess Liability policy. <br /> <br />
            
            <b>Liability for Property Damage</b> – The minimum that you must carry varies by state, but that minimum is not likely to be enough to protect you in a serious accident.  
            With many cars costing upwards of $50,000, you could easily be responsible for a substantial repair bill if you hit someone’s car and it is totaled.  
            If you have a Personal Umbrella policy, you will be covered for excess costs, but your insurance company may require that you carry more than the minimum to qualify for a Personal Umbrella policy. <br /> <br />
            
            <b>Collision</b> – Covers the cost of damage to your own car in an accident.  
            You don’t have to figure out how much to buy – that depends on the vehicle(s) you insure.  
            But you do need to decide whether to buy it and how large a deductible to take. 
            The higher the deductible, the lower your premium will be.  
            Deductibles generally range from $250 to $1,000.  
            Collision coverage is important to have if a car is new and valuable, but less important as the value of the vehicle declines.  
            If the car is only worth $1,000 and the deductible is $500, it may not make sense to buy collision coverage.  
            Collision insurance is not generally required by state law. <br /> <br />
            
            <b>Comprehensive</b> – Covers the cost of miscellaneous damages to your car not caused by a collision, such as fire and theft. 
            As with Collision coverage, you need to choose a deductible. 
            The higher deductible you choose, the lower your premium will be.  
            Comprehensive coverage is generally sold together with Collision, and the two are often referred together as Physical Damage coverage. 
            If the car is leased or financed, the leasing company or lender may require you to have Physical Damage coverage, even though the state law may not require it.<br /> <br />
            
            <b>Medical Expenses</b> – Covers the cost of medical care for you and your passengers in the event of an accident.  
            The limit you choose under Medical Expenses coverage is the maximum that will be paid for medical claims to each driver.  
            Therefore, if you choose a $2,000 Medical Expense Limit, each passenger will have up to $2,000 coverage for medical claims resulting from an accident in your vehicle.<br /> <br />
            
            <b>Uninsured/Underinsured Motorist Coverage</b> – If you are involved in an accident and the other driver is at fault but has too little or no insurance, this covers the gap between your costs and the other driver’s coverage, up to the limits of your coverage.  
            In some states, this coverage is limited to bodily injury, while in others it may cover property damage, as well. 
            The limits required and optional limits that may be available are set by state law.<br /> <br />
            
            <b>Personal Injury Protection (“PIP” or “No-fault”)</b> – This coverage, required by law in some states, covers your medical costs and those of your passengers, regardless of who was responsible for the accident.  
            The limits required and optional limits that may be available are set by state law.<br /> <br />
            
            Our consultation will focus on finding the appropriate coverage and if you qualify for a discount, too!
            </p>
            <Footer />

      </div>
    );
  }
}

export default AutoCoverage;