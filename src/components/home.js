import React from 'react';
import '../styles/home.css';
import Header from './header';
import Footer from './footer';

export class Home extends React.Component{

  render (){
    return (

      <div className="home-container">
              <Header />

      <section>
      
      <img src={require('../images/IMG_1785.jpg')} alt="LA area"  className="home-main-img"/>
      </section>

      <section className="home-intro">
<p className="intro-text">
Here is a description of your company. 
Pellentesque inhabitant morbi tristic senectus and netus malesuada fames. 
Ullamcorper turpis, nec convallis metus nunc vel turpis. 
Augue justo ullamcorper turpis, nec convallis metus nunc vel turpis.
</p>

<button>Schedule A Free Consultation</button>
      </section>

      <section className="scenarios">
      
      <img src={require('../images/IMG_1784.jpg')} alt="LA area"  className="home-scenarios-img"/>

      </section>
      <Footer />

      </div>
    );
  }
}

export default Home;