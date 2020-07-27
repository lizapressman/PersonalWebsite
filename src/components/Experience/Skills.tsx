import React, { useState, useMemo } from 'react'
import SkillBar from 'react-skillbars';
import Button from 'react-bootstrap/Button';

const Skills = () => {
    const [skills, setSkills] = useState("")

    const colors = {
        bar: '#328fa9',
        title: {
            text: {
                hue: 193,
                saturation: 58,
                level: 23
            },
            background: {
                hue: 194,
                saturation: 0,
                level: 100
            },

        }
    }
    const languages = [
        { type: "Java", level: 90 },
        { type: "Javascript", level: 75 },
        { type: "Python", level: 50 },
        { type: "HTML", level: 80 },
        { type: "CSS", level: 55 },
        { type: "LATEX", level: 50 },
        { type: "C", level: 45 },
        { type: "Typescript", level: 40 },
        { type: "SQL", level: 30 },
    ];
    const technologies = [
        { type: "React", level: 80 },
        { type: "Git", level: 85 },
        { type: "Springboot", level: 65 },
        { type: "Vue", level: 45 },
        { type: "Docker", level: 25 },
        { type: "Flask", level: 15 },
        { type: "AWS", level: 15 },
    ];
    const designTools = [
        { type: "Illustrator", level: 85 },
        { type: "Procreate", level: 90 },
        { type: "Invision", level: 40 },
    ];

    const Bar = useMemo(() => {
        return (
            <SkillBar skills={
                skills === "languages" ? languages :
                    skills === "technologies" ? technologies :
                        skills === "designTools" ? designTools :
                            []}
                colors={colors}
            />
        )
    }, [skills, languages, technologies, designTools, colors])

    return (
        <>
            <h1>Skills</h1>
            <hr></hr>
            <div className="experienceBox">
                <div className="skillButtons">
                    <Button variant="outline-light" onClick={() => { setSkills("languages") }} onBlur={() => { setSkills("") }}>Languages</Button>
                    <Button variant="outline-light" onClick={() => { setSkills("technologies") }} onBlur={() => { setSkills("") }}>Technologies</Button>
                    <Button variant="outline-light" onClick={() => { setSkills("designTools") }} onBlur={() => { setSkills("") }}>Design Tools</Button>
                </div>
                {Bar}
            </div>
        </>
    )
}

export default Skills