import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return (

        // <div id="contact">
        //     <h1>Contact Me</h1>
        //     {/* <hr></hr> */}
        //     <p>Phone: (510) 410-0565 <br></br> Email: lpressma@u.rochester.edu</p>
        // </div>

        <div id="contact" style={{"background-image": "url(../images/fall.jpeg)"}}>
          <div class = "title" >
              <h1>Contact Me</h1>
              {/* <p style={{"color": "black"}}>Phone: (510) 410-0565<br></br>Email: lpressma@u.rochester.edu</p> */}
              <p><span style={{"background-color": "white", "padding":"2vh","color": "black"}}>Phone: (510) 410-0565</span><br></br><br></br><span style={{"background-color": "white", "padding":"2vh", "color": "black"}}>Email: lpressma@u.rochester.edu</span></p>
          </div>
        </div>

    )
  }
}