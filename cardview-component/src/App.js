import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css'
import CardView from './CardView';

class App extends Component {
  render() {
    return (
      <div className='main-content'>
        <CardView/>
        <CardView/>
        <CardView/>
        <CardView/>
        <CardView/>
        <CardView/>
      </div>
      
    );
  }
}

export default App;
