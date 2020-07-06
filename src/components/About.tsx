import React from "react"

export const About = () => {
  return (

    <div id="about-me">

      <div className="me">
        <img src="images/me2.png" alt="ME"></img>
      </div>

      <div id="about">
        <h1>About Me</h1>
        <hr></hr>
        <p>Hello, my name is Liza! I am currently a senior at at the University of Rochester (class of 2021) triple majoring in Computer Science, Mathematics, and Studio Art. I have a CS concentration in Human Computer Interaction (HCI).</p>
        {/* <p>My hobbies include drawing, painting, bullet-journaling, cooking, and playing volleyball. My ability to think creatively and openly has really helped me with problem solving in both CS and math.</p> */}
        <p>Take a look at my <a href="resume.pdf">resume</a>, <a href="https://github.com/lizapressman">github</a>, or <a href="https://www.linkedin.com/in/lizapressman/">linkedin</a>!</p>
      </div>
    </div>

  )
}