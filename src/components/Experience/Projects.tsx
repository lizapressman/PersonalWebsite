import React from 'react'

export const Projects = () => {
    return (
        <>
            <h1>Projects</h1>
            <hr></hr>
            <div className="experienceBox">
                <h2><b>Personal Website | React, Typescript, CSS</b></h2>
                <a className="projectLink" href="https://github.com/lizapressman/PersonalWebsite"><img src="images/github.png" alt="githubLogo" className="githubLogo" /> github.com/lizapressman/PersonalWebsite</a>
                <p>Personal portfolio site written in React using Typescript and custom CSS</p>
            </div>
            <div className="experienceBox">
                <h2><b>Resume To Website | Python, React, Flask</b></h2>
                <a className="projectLink" href="https://github.com/lizapressman/ResumeToWebsiteWebsite"><img src="images/github.png" alt="githubLogo" className="githubLogo" /> github.com/lizapressman/ResumeToWebsiteWebsite</a>
                <a className="projectLink" href="https://github.com/lizapressman/ResumeToWebsite"><img src="images/github.png" alt="githubLogo" className="githubLogo" /> github.com/lizapressman/ResumeToWebsite</a>
                <p>React website that takes user inputted resume and parses it using Python backend to publish resulting HTML portfolio site</p>
            </div>
            <div className="experienceBox">
                <h2><b>Therapy Journaling Application | MERN</b></h2>
                <a className="projectLink" href="https://github.com/Mayshinlyan/TherapyJournalling"><img src="images/github.png" alt="githubLogo" className="githubLogo" /> github.com/Mayshinlyan/TherapyJournalling</a>
                <p>Application using MERN stack for personalized journaling with automated feedback based on mood &amp; text analysis</p>
            </div>
            <div className="experienceBox">
                <h2><b>Connect Four AI | Java</b></h2>
                <a className="projectLink" href="https://github.com/lizapressman/ConnectFour"><img src="images/github.png" alt="githubLogo" className="githubLogo" /> github.com/lizapressman/ConnectFour</a>
                <p>Implementation of Connect Four using a minimax algorithm along with a heuristic function and alpha-beta pruning (with fixed depth cutoff)</p>
            </div>
            {/* <div className="experienceBox">
				<h2><b>Dijkstra’s Algorithm | Java</b></h2>
				<p>Implemented a program using java graphics to find the shortest path between any two points in New York State</p>
			</div> */}
        </>
    )
}

export default Projects