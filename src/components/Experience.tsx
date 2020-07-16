import React from 'react'

export const Experience = () => {
	return (

		<div id="experience" >

			<h1>Experience</h1>
			<hr></hr>
			<div className="experienceBox">
				<h2><b>Target</b></h2>
				<h3>Software Engineering Intern | June 2020 - PRESENT</h3>
				<p>Working on the Purchase Orders Team developing with Java, Springboot, jOOQ, and React
					<ul>
						<li>Writing React components for internal Admin UI</li>
						<li>Writing PostgreSQL queries within Java Springboot backend and exposing them on rest endpoints</li>
						<li>Writing Java Springboot functional and unit tests</li>
					</ul>
				</p>
			</div>

			<div className="experienceBox">
				<h2><b>DoctorPlan</b></h2>
				<h3>Software Engineering Intern | June 2019 - August 2019</h3>
				<p>Worked primarily on doctor facing tools
					<ul>
						<li>Used Java to gather and summarize patient data and optimize visual display for surgeons’ use</li>
						<li>Used Javascript to convert data to natural language</li>
						<li>Used Vue.js to develop a questionnaire web application</li>
					</ul>
				</p>
			</div>

			<h1>Projects</h1>
			<hr></hr>
			<div className="experienceBox">
				<h2><b>Personal Website | React</b></h2>
				<a href="https://github.com/lizapressman/PersonalWebsite">github.com/lizapressman/PersonalWebsite</a>
				<p>Personal portfolio site written in React using Typescript and custom CSS</p>
			</div>
			<div className="experienceBox">
				<h2><b>ResumeToWebsite | React</b></h2>
				<a href="https://github.com/lizapressman/ResumeToWebsite">github.com/lizapressman/ResumeToWebsite</a>
				<p>Resume Parser that produces a resulting html portfolio site based on the resume</p>
			</div>
			<div className="experienceBox">
				<h2><b>Therapy Journaling Application | React</b></h2>
				<a href="https://github.com/Mayshinlyan/TherapyJournalling">github.com/Mayshinlyan/TherapyJournalling</a>
				<p>Application using MERN stack for personalized journaling with automated feedback based on mood &amp; text analysis</p>
			</div>
			<div className="experienceBox">
				<h2><b>Dijkstra’s Algorithm | Java</b></h2>
				<p>Implemented a program using java graphics to find the shortest path between any two points in New York State</p>
			</div>
			<div className="experienceBox">
				<h2><b>Connect Four AI | Java</b></h2>
				<p>Implemented a minimax algorithm along with a heuristic function and alpha-beta pruning (with a fixed depth cutoff)</p>
			</div>

			<h1>Courses</h1>
			<hr></hr>
			<div className="experienceBox">
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
							<li>Calculus (differential, integral, multi)</li>
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
		</div>

	)
}
