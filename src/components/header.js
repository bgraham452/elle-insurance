import React, { Component } from 'react';
import '../styles/header.css';
import NavBar from './navbar';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <h1 className="App-title">ELLE FLORES - FINANCIAL CONSULTATION</h1>
          <h2 className="App-subtitle"><i>Get ready to take control of your finances.</i></h2>
          <NavBar />

        </header>
      
    );
  }
}

export default Header;