import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


export const Courses = () => {
    const [view, setView] = useState("");

    const ComputerScience = () => {
        return (
            <>
                <p>Data Structure and Algorithms</p>
                <p>Computation and Formal Systems</p>
                <p>Artificial Intelligence</p>
                <p>Web Development</p>
                <p>Human Computer Interaction</p>
                <p>Computer Organization</p>
            </>
        )
    }

    const Mathematics = () => {
        return (
            <>
                <p>Discrete Mathematics</p>
                <p>Calculus (differential, integral, multi)</p>
                <p>Linear Algebra</p>
                <p>Introduction to Cryptography</p>
                <p>Introduction to Topology</p>
                <p>Introduction to Probability</p>
                <p>Game Theory</p>
            </>
        )
    }

    const StudioArt = () => {
        return (
            <>
                <p>Intoduction to Sculpture</p>
                <p>Advanced Sculpture</p>
                <p>Digital Media Toolkit</p>
                <p>New Media and Emerging Practice</p>
                <p>Writing on Art</p>
                <p>Markings, Methods, and Materials</p>
                <p>Introduction to Drawing</p>
            </>
        )
    }

    const Subject = () => {
        if (view === "computerScience") {
            return <ComputerScience />
        }
        if (view === "mathematics") {
            return <Mathematics />
        }
        if (view === "studioArt") {
            return <StudioArt />
        }
        return (<></>)
    }
    return (
        <>
            <h1>Courses</h1>
            <hr></hr>
            <div className="experienceBox" style={{ textAlign: "center" }}>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle style={{ color: "#328fa9", backgroundColor: "rgba(0,0,0,.03)", padding: "10px" }} variant="outline-light" as={Button} eventKey="0" onClick={() => { setView("computerScience") }}>
                            Computer Science
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Subject />
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle style={{ color: "#328fa9", backgroundColor: "rgba(0,0,0,.03)", padding: "10px" }} variant="outline-light" as={Button} eventKey="1" onClick={() => { setView("mathematics") }}>
                            Mathematics
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Subject />
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle style={{ color: "#328fa9", backgroundColor: "rgba(0,0,0,.03)", padding: "10px" }} variant="outline-light" as={Button} eventKey="2" onClick={() => { setView("studioArt") }}>
                            Studio Art
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Subject />
                        </Accordion.Collapse>
                    </Card>
                </Accordion >
            </div>
        </>
    )
}

export default Courses