import React, { Component } from 'react';
import '../styles/App.css';
import Header from './header';
import Home from './home';
import Footer from './footer';
class App extends Component {
 


  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
