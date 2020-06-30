import React, { Component } from 'react'
import { ImgContainer } from './ImgContainer'

export default class Portfolio extends Component {
	render() {
		return (

			<div id="portfolio">
				<h1>Portfolio</h1>
				<hr></hr>

				<div className="row">
					<div className="column">
						<ImgContainer src="art/18.JPG" txt="Acrylic on canvas." />
						<ImgContainer src="art/1.jpg" txt="Graphite and colored pencil shavings." />
						<ImgContainer src="art/3.jpg" txt="Graphite hand study." />
						<ImgContainer src="art/4.jpg" txt="Fluid acrylic paint on synthetic paper." />
						<ImgContainer src="art/17.png" txt="Anime created with Procreate on an ipad pro." />
					</div>
					<div className="column">
						<ImgContainer src="art/19.JPG" txt="Acrylic on canvas." />
						<ImgContainer src="art/5.jpg" txt="Acrylic and pen on canvas." />
						<ImgContainer src="art/6.jpg" txt="Graphite sketch." />
						<ImgContainer src="art/2.jpg" txt="Acrylic on canvas." />
						<ImgContainer src="art/8.png" txt="Stickers created with Procreate on an ipad pro." />
					</div>
					<div className="column">
						<ImgContainer src="art/20.JPG" txt="Acrylic on canvas." />
						<ImgContainer src="art/9.jpg" txt="My aunt's dog, Summit, created with Procreate on an ipad pro." />
						<ImgContainer src="art/10.jpg" txt="Paper and pen on a black pedastal." />
						<ImgContainer src="art/11.jpg" txt="Marker anime." />
						<ImgContainer src="art/12.jpg" txt="Graphite sketch." />
						<ImgContainer src="art/16.png" txt="Sketch created with Procreate on an ipad pro." />
					</div>
					<div className="column">
						<ImgContainer src="art/21.JPG" txt="Acrylic on canvas." />
						<ImgContainer src="art/13.png" txt="Sketch created with Procreate on an ipad pro." />
						<ImgContainer src="art/14.jpg" txt="Pen zentangle." />
						<ImgContainer src="art/15.png" txt="My dog, Coconut, created with Procreate on an ipad pro." />
						<ImgContainer src="art/7.JPG" txt="Box sculpture made from found objects." />
					</div>
				</div>
			</div>

		)
	}
}