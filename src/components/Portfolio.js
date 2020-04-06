import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return (

        <div id="portfolio">
            <h1>Portfolio</h1> 
		<hr></hr>

		<div class="row">
			<div class="column">
				{/* <div class="imgcontainer">
					<img src="art/1.jpg" style="width:100%" class="image">
						<div class="overlay">
							<div class="text">Graphite and colored pencil shavings.</div>
						</div>
				</div> */}
				<img src="art/1.jpg"></img>
			  	<img src="art/3.jpg"></img>
			  	<img src="art/4.jpg"></img>
			  	<img src="art/17.png"></img>
			</div>
			<div class="column">
			  	<img src="art/5.jpg"></img>
			  	<img src="art/6.jpg"></img>
			  	<img src="art/2.jpg"></img>
			  	<img src="art/8.png"></img>
			</div>
			<div class="column">
			  	<img src="art/9.jpg"></img>
			  	<img src="art/10.jpg"></img>
			  	<img src="art/11.jpg"></img>
			  	<img src="art/12.jpg"></img>
			  	<img src="art/16.png"></img>
			</div>
			<div class="column">
			  	<img src="art/13.png"></img>
			  	<img src="art/14.jpg"></img>
			  	<img src="art/15.png"></img>
			  	<img src="art/7.JPG"></img>
			</div>
		  </div>
        </div>

    )
  }
}