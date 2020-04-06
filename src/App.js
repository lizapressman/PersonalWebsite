import React, { Component } from 'react';
import './App.css';
import './navigation.css';
import Header from './components/Header'
import NavBar from './components/NavBar'
import About from './components/About'
import Experience from './components/Experience'
import Break from './components/Break'
import Break2 from './components/Break2'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'



class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div id="sections">
          <About></About>
        </div>
        <Break2></Break2>
        <div id="sections">
          <Experience></Experience>
        </div>
        <Break></Break>
        <div id="sections">
          <Portfolio></Portfolio>
        </div>
        <Contact></Contact>
        <p style={{"text-align": "center"}}>Copyright © 2019 Liza Pressman, all rights reserved</p>
        <NavBar></NavBar>
      </div>
    );
  }
}

export default App;