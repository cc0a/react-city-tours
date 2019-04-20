import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar'; // since it is an export via default function, the name of the function is not relevant
import TourList from './components/TourList';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Navbar />
          <TourList />
        </React.Fragment>
    ); // the reason for utilizing a fragment is a desire to avoid unnecessary divs
  }
}

export default App;
