import React, { Component } from 'react'


export default class Sidebar extends Component {

render() {
  return (
    <div id="sidebar">
    <div>
      {" "}
      <img id="profile-photo" src="images/profile_pic.jpeg" alt="Profile Image" />
    </div>
    <div>
      <p className="name">Victor A. Medina</p>
      <p className="description">-Mechanical Engineer turned Software Engineer</p>
      <p className="description">
        - I enjoy solving technical problems and creating useful applications for
        others
      </p>
      <p className="description">
        -I like to travel (Have visited 29 countries) and powerlift
      </p>
    </div>
    <hr />
    <div className="skills-section">
      <h3 className="sidebar-section">Skills</h3>
      <p className="skills">Python</p>&nbsp; <p className="skills">JavaScript</p>
      &nbsp; <p className="skills">SQL</p> &nbsp; <p className="skills">HTML</p>
      &nbsp; <p className="skills">CSS</p>
      <p className="skills">AWS</p>&nbsp; <p className="skills">GIT</p>
      <p className="skills">CI/CD</p>&nbsp; <p className="skills">Django</p>
      <p className="skills">Pandas</p>&nbsp; <p className="skills">Numpy</p>
      <p className="skills">Linux</p>
      <p className="skills">MySQL</p>
    </div>
    <hr />
    <div className="education-section">
      <h3>Education</h3>
      <img className="thumbnail" src="images/CMU.jpeg" alt="" />
      <p className="education">MS: Mechanical Engineering 2015</p>
      <p className="education">BS: Mechanical Engineering 2014</p>
      <br />
      <img className="icon" src="images/University_of_Washington.png" alt="" />
      <p className="education" style={{ fontSize: ".9em" }}>
        Certificate: Python Programming 2020
      </p>
    </div>
    <hr />
    <h3 className="sidebar-section">Certifications</h3>
    <a
      href="https://www.credly.com/badges/3049c769-366c-4903-abef-5c6b40a7a592/public_url"
      target="_blank"
    >
      <img
        className="thumbnail"
        src="images/aws-certified-solutions-architect-associate.png"
        alt=""
      />
    </a>
    <hr />
    <h3 className="sidebar-section">Contact me</h3>
    <a id="email" href="mailto:vmedina1014@gmail.com">
      <img className="social-thumbnail" src="images/mail.png" alt="" />
    </a>
    <a href="https://www.linkedin.com/in/vmedina1014/" target="_blank">
      {" "}
      <img className="social-thumbnail" src="images/linkedin.png" alt="" />
    </a>
    <a href="https://www.github.com/vmedina1014" target="_blank">
      {" "}
      <img className="social-thumbnail" src="images/github.png" alt="" />
    </a>
    <hr />
    <h3 className="sidebar-section">Download my Resumes</h3>
    <a href="pdfs/Medina_Victor_Resume-1.pdf" target="_blank">
      Software Engineer Resume
    </a>
    <br />
    <a href="pdfs/Medina_Victor_Resume_SA_Apri2021.pdf" target="_blank">
      Structural Analysis Engineer Resume
    </a>
  </div>
  
  )
 }
}