import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Break } from './components/Break'
import { Art } from './components/Art'
import { Contact } from './components/Contact'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Header></Header>
        <div id="sections">
          <About></About>
        </div>
        <div id="sections">
          <Experience></Experience>
        </div>
        <Break num="break" src="./images/art.jpeg"></Break>
        <div id="sections">
          <Art></Art>
        </div>
        <Contact></Contact>
        <p style={{ "textAlign": "center" }}>Copyright © 2020 Liza Pressman, all rights reserved</p>

      </div>
    );
  }
}

export default App;