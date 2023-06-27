import React, { Component } from 'react'

const experience = [
    {
        name: 'Boeing',
        position: 'Lead Structural Analysis Engineer',
        duration: '12/2021 - 09/2022',
        responsibilities: [`Lead Structural Analysis Engineer for the APU system development team for NMA involving several suppliers/teaming partners, and require frequent customer interface`,
            `Lead development, integration and documentation of structural requirements to establish the system design`,
            `Guided product design and verified structural integrity by using and developing analytical methods, finite element models/simulations and other analysis tools with Python throughout the product lifecycle to develop the structural environment, characteristics and performance`,
            `Integrated a GIT process for Finite Element Models and CI for typical FEM checks that have now been automated for quicker FEM development reducing the need for FEM rework and manual checks saving over 80% man hours when compared to traditional methods`,
            `Developed analytical processes/tools using Python to improve effectiveness, quality and efficiency of the development effort`]
    },

]








export default class Leadership extends Component {

    render() {
        return (
            <div>
                <h1>Leadership</h1>
                <hr />


                {experience.map((exp, index) => (
                    <div key={index}>

                        <span className='position'><b>{exp.position}; {exp.name}</b></span>
                        <span className="date">{exp.duration}</span>
                        <ul>
                            {exp.responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>


        );
    }
}