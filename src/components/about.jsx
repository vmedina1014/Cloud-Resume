import React, { Component } from 'react'
import profile_pic from '../images/profile_pic.jpeg';

export default class About extends Component {

   render() {
      return (
   <div>
        
   <img id="profile-photo" src={profile_pic} alt="logo" />

   <p className="name">Victor A. Medina</p>
   <p className="title">Software Engineer</p>
   <p className="description">-Mechanical Engineer turned Software Engineer</p>
   <p className="description">
     - I enjoy solving technical problems and creating useful applications for
     others
   </p>
   <p className="description">
     -I like to travel (Have visited 29 countries) and powerlift
   </p>
 </div>
      )
   }
}