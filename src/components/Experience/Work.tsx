import React, { useState } from 'react'

export const Work = () => {
    const [isTargetShown, setIsTargetShown] = useState(false);
    const [isDoctorPlanShown, setIsDoctorPlanShown] = useState(false);

    const closedStyle = {
        border: "solid white", borderWidth: "0 3px 3px 0", display: "inline - block", margin: "10px", padding: "8px", transform: "rotate(45deg)", WebkitTransform: "rotate(45deg)"
    }

    const openStyle = {
        border: "solid white", borderWidth: "0 3px 3px 0", display: "inline - block", margin: "10px", padding: "8px", transform: "rotate(-135deg)", WebkitTransform: "rotate(-135deg)"
    }

    const expandTarget = () => {
        setIsTargetShown(!isTargetShown)
    }

    const expandDoctorPlan = () => {
        setIsDoctorPlanShown(!isDoctorPlanShown)
    }

    const Target = () => {
        return (
            <div className="experienceBox" >
                <h2><b>Target</b></h2>
                <h3>Software Engineering Intern | June 2020 - PRESENT</h3>
                <hr />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i onClick={() => expandTarget()}
                        style={isTargetShown ? openStyle : closedStyle}></i>
                </div>
                {isTargetShown && (
                    <>
                        <p>Working on the Purchase Orders Team developing with Java, Springboot, jOOQ, and React</p>
                        <ul>
                            <li>Writing React components for internal Admin UI</li>
                            <li>Writing PostgreSQL queries within Java Springboot backend and exposing them on rest endpoints</li>
                            <li>Writing Java Springboot functional and unit tests</li>
                        </ul>
                    </>
                )
                }
            </div >
        )
    }

    const DoctorPlan = () => {
        return (
            <div className="experienceBox" >
                <h2><b>DoctorPlan</b></h2>
                <h3>Software Engineering Intern | June 2019 - August 2019</h3>
                <hr />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i onClick={() => expandDoctorPlan()}
                        style={isDoctorPlanShown ? openStyle : closedStyle}></i>
                </div>
                {isDoctorPlanShown && (
                    <>
                        <p>Worked primarily on doctor facing tools</p>
                        <ul>
                            <li>Used Java to gather and summarize patient data and optimize visual display for surgeons’ use</li>
                            <li>Used Javascript to convert data to natural language</li>
                            <li>Used Vue.js to develop a questionnaire web application</li>
                        </ul>
                    </>
                )
                }
            </div >
        )
    }

    return (
        <>
            <h1>Experience</h1>
            <hr></hr>
            <Target />
            <DoctorPlan />
        </>
    )
}

export default Work