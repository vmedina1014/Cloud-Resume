import React, { Component } from 'react'
import UW_Logo from '../images/University_of_Washington.png';
import CMU_Logo from '../images/CMU.jpeg';


export default class Education extends Component {

render() {
  return (
   <div className="education-section">
   <h3>Education</h3>
   <img className="thumbnail" src={CMU_Logo} alt="" />
   <p className="education">MS, Mechanical Engineering 2015</p>
   <p className="education">BS, Mechanical Engineering 2014</p>
   <br />
   <img className="icon" src={UW_Logo} alt="" />
   <p className="education" style={{ fontSize: ".9em" }}>
     Certificate: Python Programming 2020
   </p>
 </div>
  )
 }
}