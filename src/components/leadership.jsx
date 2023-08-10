import React, { Component } from 'react'

const experience = [
    {
        name: 'Boeing',
        position: 'Lead Software Engineer',
        duration: '05/2019 - 02/2020',
        responsibilities: [`Lead of the SoCal Propulsion site introducing tools and processes to the regional site`,
            `Developed analytical processes/tools using Python to improve effectiveness, quality and efficiency of the development effort`,
            `Mentored structural analysis engineers site wide on Python and GIT`,
            `Managed project budgets, proposals and statuses for Propulsion leadership`]
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