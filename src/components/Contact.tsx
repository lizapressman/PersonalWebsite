import React, { Component } from 'react'


export default class Portfolio extends Component {
  render() {
    return (

      // <div id="contact">
      //     <h1>Contact Me</h1>
      //     {/* <hr></hr> */}
      //     <p>Phone: (510) 410-0565 <br></br> Email: lpressma@u.rochester.edu</p>
      // </div>

      <div id="contact" style={{ "backgroundImage": "url(./images/fall.jpeg)" }}>
        <div className="title" >
          <h1>Contact Me</h1>
          {/* </div> */}
          {/* <p style={{"color": "black"}}>Phone: (510) 410-0565<br></br>Email: lpressma@u.rochester.edu</p> */}

          <p style={{ "backgroundColor": "white", "padding": "2vh", "marginLeft": "40vw", "marginRight": "40vw", "color": "black" }}>
            <a href="mailto:lpressma@u.rochester.edu"><img src="https://img.icons8.com/nolan/64/email.png" /></a>
            {/* <a href="mailto:lpressma@u.rochester.edu"><img src="https://img.icons8.com/nolan/64/filled-sent.png"/></a> */}
            <a href="https://github.com/lizapressman"><img src="https://img.icons8.com/nolan/64/github.png" /></a>
            <a href="https://www.linkedin.com/in/lizapressman/"><img src="https://img.icons8.com/nolan/64/linkedin.png" /></a>
          </p>
          {/* <p style={{"background-color": "white", "padding":"2vh","margin-left":"35vw","margin-right":"35vw","color": "black"}}>
                <a href="mailto:lpressma@u.rochester.edu"><img src="https://img.icons8.com/carbon-copy/100/000000/email.png"/></a>
                <a href="https://github.com/lizapressman"><img src="https://img.icons8.com/wired/64/000000/github.png"/></a>
                <a href="https://www.linkedin.com/in/lizapressman/"><img src="https://img.icons8.com/wired/64/000000/linkedin.png"/></a> 
              </p>                       */}
        </div>
      </div>

    )
  }
}