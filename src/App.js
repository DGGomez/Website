import React, { Component } from 'react';

import './App.css';

import {
  Home
} from './routes';

import Header from './components/Header';
import Footer from './components/Footer';
import Footer2 from './components/footer2';
import Footer3 from './components/footer3';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <Home />
        </div>
        <Footer3 />
        <Footer />
        <Footer2/>
      </div>
    );
  }
}

export default App;
