import React, { Component } from 'react';
import '../styles/footer.css';

class Footer extends Component {
  render() {
    return (
        <footer className="App-footer">
          <h1 className="footer-title"><i>Let's Talk!<br /> Your first consultation is free.</i></h1>

          <button className="consultation">Schedule</button>


        </footer>
      
    );
  }
}

export default Footer;