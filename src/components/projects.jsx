import React, { Component } from 'react'

const experience = [
    {
        
        project: 'Cross Reference Database Replacement; Boeing Product Standards Digital Enterprise',
        
        responsibilities: [`Created a web application utilizing Django Framework backed by MySQL and HTML/CSS/JavaScript which tracks engineering
        artifacts located in various servers/websites which significantly improved engineers ability to reference other engineering
        documents and significantly reduce rework`,
            `Developed an API to easily allow transfer records from outdated Microsoft access database saving over 2,000 man hours when
            compared to manual entry`,
            `Created a dashboard utilizing Pandas and Plotly with service request key analytics to help inform the team on best future
            structural repair manual initiatives and drive design improvements`]
    },
    {
        
        project: 'Cloud Resume',
        
        responsibilities: [`Developed a static website of my resume using React hosted on AWS S3`,
            `Utilized AWS services such as API gateway, Lambda and DynamoDB to include a resume hit counter on the website`,
            `Utilized Playwright for testing, Terraform to utilize Infrastructure as Code for AWS services and Github actions for CI/CD`,
        `Integrated AWS CloudWatch, SNS and Chatbot for monitoring which provides personal notifications via email and slack messages`]
    },

]








export default class Projects extends Component {

    render() {
        return (
            <div>
                <h1>Projects</h1>
                <hr />


                {experience.map((exp, index) => (
                    <div key={index}>

                        <span className='position'><b>{exp.project}</b></span>
                        
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