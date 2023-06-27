import React, { Component } from 'react'

import aws_cert from '../images/aws-certified-solutions-architect-associate.png';
import UW_Logo from '../images/University_of_Washington.png';
import CMU_Logo from '../images/CMU.jpeg';
import email_Logo from '../images/mail.png';
import github_logo from '../images/github.png';
import linkedin_logo from '../images/linkedin.png';


export default class Sidebar extends Component {

  render() {
    return (
      <div>

        
       
        
        <div className="education-section">
          <h3>Education</h3>
          <img className="thumbnail" src={CMU_Logo} alt="" />
          <p className="education">MS: Mechanical Engineering 2015</p>
          <p className="education">BS: Mechanical Engineering 2014</p>
          <br />
          <img className="icon" src={UW_Logo} alt="" />
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
            src={aws_cert}
            alt=""
          />
        </a>
        <hr />
        <h3 className="sidebar-section">Contact me</h3>
        <a id="email" href="mailto:vmedina1014@gmail.com">
          <img className="social-thumbnail" src={email_Logo} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/vmedina1014/" target="_blank">
          <img className="social-thumbnail" src={linkedin_logo} alt="" />
        </a>
        <a href="https://www.github.com/vmedina1014" target="_blank">

          <img className="social-thumbnail" src={github_logo} alt="" />
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