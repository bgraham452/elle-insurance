import React from 'react';
import ReactContactForm from 'react-mail-form';
import Header from './header';
import Footer from './footer';

import '../styles/contact.css';
export class Contact extends React.Component {
  
  render (){

    return (
      <div className="contact-container">
      <Header />
      <h1 className="contact-title">How Can Elle Help?</h1>
      <h3>Send her an email!</h3>
      <ReactContactForm to="bgraham452@gmail.com" className="contact-form" />

<a href="mailto:bgraham452@gmail.com?subject=&body=" className="contact-submit">
Send E-mail
</a>
      <h3>Or Contact Her Here!</h3>
      <ul>
          <li>Phone Number: (555)-5555</li>
          <li>Email: testelleemail@email.com</li>
      </ul>
      <Footer />
      </div>
    );
  }
}

export default Contact;