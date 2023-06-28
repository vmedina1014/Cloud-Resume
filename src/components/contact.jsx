import React, { Component } from 'react'
import email_Logo from '../images/mail.png';
import github_logo from '../images/github.png';
import linkedin_logo from '../images/linkedin.png';


export default class contact extends Component {
  render() {
    return (
      <div>


      <h3 className="sidebar-section">Contact me</h3>
      <a id="email" href="mailto:vmedina1014@gmail.com">
        <img className="social-thumbnail" src={email_Logo} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/vmedina1014/" target="_blank">
        <img className="social-thumbnail" src={linkedin_logo} alt="" />
      </a>
      <a href="https://www.github.com/vmedina1014" target="_blank">
      
        <img className="social-thumbnail" src={github_logo} alt="" />
      </a></div>
    )
  }
}
