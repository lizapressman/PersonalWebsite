import React from 'react'

export const Experience = () => {
	return (

		<div id="experience" >

			<h1>Experience</h1>
			<hr></hr>


			{/* <h2><b>Internship</b></h2>
			<p>Last summer I had a two month software engineering internship with <i>Doctorbox Health</i> in Sausalito, CA.
					Working with a small startup was a great experience. The fast paced, 'quick to change' environment was brand new to me and I learned so much from it.
					This was also a great glimpse into the technology meets healthcare world that I was (and still am) really interesting in diving into. </p>
			<p>Since the work I was doing was so fast paced I got the opportunity to work on many different projects throughout the summer.
						<ul>
					<li>My primary responsibility was to work on what they called the "facesheet."
					The facesheet is a single pdf document that takes a bunch of patient recorded data as input and summarizes it in a meaningful, easy to read way for the surgeons' use.
					The majority of my job here was to
					1. figure out how optimize the visual display (what to graph, what to list, what  to combine with what, etc.) and
							2. use java to actually display it (read in the numbers and output something pretty).</li>
					<li>My next task was to convert the patient recorded data to natural language. This I completed using javascript.
						Before starting this task the CTO taught me a bunch of stuff with AWS which was really interesting since I had never used any of those services prior to my internship. </li>
					<li>Finally, the last week of my internship I had pretty much completed everything they wanted but in such a fast paced environment, there is always stuff to be done so the CTO let me pick what I wanted to learn.
					The company was in the process of creating a web app throughout my whole internship and the questionnaire page had not been completed yet so I got to develop a bit of that page in my final week.
						This was my first time using Vue.js and it was really neat to get experience with something totally new!</li>
				</ul>
			</p> */}
			<div className="experienceBox">
				<h2><b>Target</b></h2>
				<h3>Software Engineering Intern | June 2020 - PRESENT</h3>
				<p>Did oh so many a tutorial.</p>
			</div>

			<div className="experienceBox">
				<h2><b>DoctorPlan</b></h2>
				<h3>Software Engineering Intern | June 2019 - August 2019</h3>
				<p>Last summer I had a two month software engineering internship with <i>Doctorbox Health</i> in Sausalito, CA.
					Working with a small startup was a great experience. The fast paced, 'quick to change' environment was brand new to me and I learned so much from it.
					This was also a great glimpse into the technology meets healthcare world that I was (and still am) really interesting in diving into. </p>
				<p>Since the work I was doing was so fast paced I got the opportunity to work on many different projects throughout the summer.
					<ul>
						<li>My primary responsibility was to work on what they called the "facesheet."
						The facesheet is a single pdf document that takes a bunch of patient recorded data as input and summarizes it in a meaningful, easy to read way for the surgeons' use.
						The majority of my job here was to
						1. figure out how optimize the visual display (what to graph, what to list, what  to combine with what, etc.) and
								2. use java to actually display it (read in the numbers and output something pretty).</li>
						<li>My next task was to convert the patient recorded data to natural language. This I completed using javascript.
							Before starting this task the CTO taught me a bunch of stuff with AWS which was really interesting since I had never used any of those services prior to my internship. </li>
						<li>Finally, the last week of my internship I had pretty much completed everything they wanted but in such a fast paced environment, there is always stuff to be done so the CTO let me pick what I wanted to learn.
						The company was in the process of creating a web app throughout my whole internship and the questionnaire page had not been completed yet so I got to develop a bit of that page in my final week.
							This was my first time using Vue.js and it was really neat to get experience with something totally new!</li>
					</ul>
				</p>
			</div>


			<div className="experienceBox">
				<h2><b>Courses</b></h2>
				<div className="container">
					<div>
						<h2>Computer Science</h2>
						<ul>
							<li>Data Structure and Algorithms</li>
							<li>Computation and Formal Systems</li>
							<li>Artificial Intelligence</li>
							<li>Web Development</li>
							<li>Human Computer Interaction</li>
							<li>Computer Organization</li>
						</ul>
					</div>
					<div>
						<h2>Mathematics</h2>
						<ul>
							<li>Discrete Mathematics</li>
							<li>Calculus (differential, integral, multidimentional)</li>
							<li>Linear Algebra</li>
							<li>Introduction to Cryptography</li>
							<li>Introduction to Topology</li>
							<li>Introduction to Probability</li>
							<li>Game Theory</li>
						</ul>
					</div>
					<div>
						<h2>Studio Art</h2>
						<ul>
							<li>Intoduction to Sculpture</li>
							<li>Advanced Sculpture</li>
							<li>Digital Media Toolkit</li>
							<li>New Media and Emerging Practice</li>
							<li>Writing on Art</li>
							<li>Markings, Methods, and Materials</li>
							<li>Introduction to Drawing</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="experienceBox">
				<h2><b>Projects</b></h2>
				<ul>
					<li>In <i>Human Computer Interaction</i>, I had a group project spanning almost the length of the class in which we created a web application using MERN stack for user’s personalized journaling with automated feedback on user’s private journals, along with mood and text analysis. You can check out the working prototype here: <a href='https://journaly-csc.herokuapp.com' />Journaly.</li>
					<li>In <i>Artificial Intelligence</i>, I implemented a connect four AI that beats me everytime (which is totally awesome)! I struggled through creating an AI for connect four in highschool and my final product was really bad since I didn't use any proper algorithms. But, it was incredible to see such a transformation between my two AIs. I also implemented a program that can solve any constraint satisfaction problem (CSP). Finally for that course, I coded a decision tree learning program as well as a Linear and a Perceptron classifier.</li>
					<li>In <i>Computation and Formal Models</i> I created projects which involved creating DFAs, NFAs, Recursive and table driven parsers for grammars, functional programming, and implementing my own relational data model. This was definitely my favorite course. All coding had to be done in C which we had to teach ourselves so it was very challenging. It was also my first CS theory course so it was quite an adjustment. However, it was the most rewarding course i've taken thus far.</li>
					<li>In <i>Data Structures and Algorithms</i>, I worked on some very cool projects. I created a version of the popular game 2048. This was my first time working with graphics in java and I was pretty proud of my final product. In this class, I also worked on a huffman encoding project which was one of my favorites because the actual application was so evident. It was also really exciting to see everything come together and work as it should. My last project for this course involved using Dijkstras algorithm to find the shortest path between any two points in New York state. Visually, this was the most exciting project.</li>
					<li>In <i>Web design</i>, I created a wide array of websites. I used what I learned in this course to create my first versions of my personal website with just basic html, css, and javascript.</li>
					<li>Finally, I learned React to create this website that you're looking at now!</li>
				</ul>
			</div>
		</div>

	)
}
