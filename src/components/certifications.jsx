import React, { Component } from 'react'
import aws_cert from '../images/aws-certified-solutions-architect-associate.png';


export default class Certifications extends Component {

    render() {
        return (
            <div><h3 className= "sidebar-section" > Certifications < /h3>
            <a
        href = "https://www.credly.com/badges/3049c769-366c-4903-abef-5c6b40a7a592/public_url"
        target = "_blank"
            >
            <img
        className="thumbnail"
        src = {aws_cert} alt = ""/>
            </a>
            </div>
  )
    }
}