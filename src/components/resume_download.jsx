import React, { Component } from 'react'
import Software_Resume from '../pdfs/Medina_Victor_Resume_v2.pdf';
import Structural_Resume from '../pdfs/Medina_Victor_Resume_SA_August2023.pdf';


export default class resume_download extends Component {
  render() {
    return (
      <div>


<h3 className="sidebar-section">Download my Resumes</h3>
        <a href={Software_Resume} target="_blank">
          Software Engineer Resume
        </a>
        <br />
        <a href={Structural_Resume} target="_blank">
          Structural Analysis Engineer Resume
        </a></div>
    )
  }
}
