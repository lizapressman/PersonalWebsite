
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (

      <div id = "header" style={{"background-image": "url(../images/salt.jpeg)"}}>
        <div class = "title">
            <h3>Hey,</h3>
            <h1>I'M LIZA!</h1>
        </div>
      </div>

    )
  }
}