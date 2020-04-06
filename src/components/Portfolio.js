import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return (

        <div id="portfolio">
            <h1>Portfolio</h1> 
		<hr></hr>

		<div class="row">
			<div class="column">
				<div class="imgcontainer">
					<img src="art/1.jpg" class="image"/>
						<div class="overlay">
							<div class="text">Graphite and colored pencil shavings.</div>
						</div>
				</div>
				<div class="imgcontainer">
					<img src="art/3.jpg" class="image"/>
						<div class="overlay">
							<div class="text">Graphite hand study.</div>
						</div>
				</div>
				<div class="imgcontainer">
					<img src="art/4.jpg" class="image"/>
						<div class="overlay">
							<div class="text">Watered down acrylic paint on synthetic paper.</div>
						</div>
				</div>
				<div class="imgcontainer">
					<img src="art/17.png" class="image"/>
						<div class="overlay">
							<div class="text">Anime created with Procreate on an ipad pro.</div>
						</div>
				</div>
				{/* <img src="art/1.jpg"></img>
			  	<img src="art/3.jpg"></img>
			  	<img src="art/4.jpg"></img>
			  	<img src="art/17.png"></img> */}
			</div>
			<div class="column">
				<div class="imgcontainer">
					<img src="art/5.jpg" class="image"/>
						<div class="overlay">
							<div class="text">Acrylic and pen on canvas.</div>
						</div>
				</div>
				<div class="imgcontainer">
					<img src="art/6.jpg" class="image"/>
						<div class="overlay">
							<div class="text">Graphite sketch.</div>
						</div>
				</div>
				<div class="imgcontainer">
					<img src="art/2.jpg" class="image"/>
						<div class="overlay">
							<div class="text">Acrylic on canvas.</div>
						</div>
				</div>
				<div class="imgcontainer">
					<img src="art/8.png" class="image"/>
						<div class="overlay">
							<div class="text">Stickers created with Procreate on an ipad pro.</div>
						</div>
				</div>
			  	{/* <img src="art/5.jpg"></img>
			  	<img src="art/6.jpg"></img>
			  	<img src="art/2.jpg"></img>
			  	<img src="art/8.png"></img> */}
			</div>
			<div class="column">
			<div class="imgcontainer">
					<img src="art/9.jpg" class="image"/>
						<div class="overlay">
							<div class="text">My aunt's dog, Summit, created with Procreate on an ipad pro.</div>
						</div>
				</div>
				<div class="imgcontainer">
					<img src="art/10.jpg" class="image"/>
						<div class="overlay">
							<div class="text">Paper and pen on a black pedastal.</div>
						</div>
				</div>
				<div class="imgcontainer">
					<img src="art/11.jpg" class="image"/>
						<div class="overlay">
							<div class="text">Marker anime.</div>
						</div>
				</div>
				<div class="imgcontainer">
					<img src="art/12.jpg" class="image"/>
						<div class="overlay">
							<div class="text">Graphite sketch.</div>
						</div>
				</div>
				<div class="imgcontainer">
					<img src="art/16.png" class="image"/>
						<div class="overlay">
							<div class="text">Sketch created with Procreate on an ipad pro.</div>
						</div>
				</div>
			  	{/* <img src="art/9.jpg"></img>
			  	<img src="art/10.jpg"></img>
			  	<img src="art/11.jpg"></img>
			  	<img src="art/12.jpg"></img>
			  	<img src="art/16.png"></img> */}
			</div>
			<div class="column">
			<div class="imgcontainer">
					<img src="art/13.png" class="image"/>
						<div class="overlay">
							<div class="text">Sketch created with Procreate on an ipad pro.</div>
						</div>
				</div>
				<div class="imgcontainer">
					<img src="art/14.jpg" class="image"/>
						<div class="overlay">
							<div class="text">Pen zentangle.</div>
						</div>
				</div>
				<div class="imgcontainer">
					<img src="art/15.png" class="image"/>
						<div class="overlay">
							<div class="text">My dog, Coconut, created with Procreate on an ipad pro.</div>
						</div>
				</div>
				<div class="imgcontainer">
					<img src="art/7.JPG" class="image"/>
						<div class="overlay">
							<div class="text">Box sculpture made from found objects.</div>
						</div>
				</div>
			  	{/* <img src="art/13.png"></img>
			  	<img src="art/14.jpg"></img>
			  	<img src="art/15.png"></img>
			  	<img src="art/7.JPG"></img> */}
			</div>
		  </div>
        </div>

    )
  }
}