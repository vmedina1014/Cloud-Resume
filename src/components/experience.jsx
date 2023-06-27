import React, { Component } from 'react'

const experience = [
    {
        name: 'Boeing',
        position: 'Full Stack Software Engineer',
        duration: '12/2021 - 09/2022',
        responsibilities: [`Maintained legacy codebase and developed customer change requests for\
        over 12 applications with varying tech stacks such as Perl, Python,
        XML, Oracle DB and Java`,
            `Collaborated with developers/architects to implement migration of
        existing applications from on premise to a cloud architecture using
        AWS`,
            ` Created technical documentation for legacy applications to enable
        technical success for future developers`]
    },
    {
       
        position: 'Senior Software Engineer;',
        duration: '01/2019 - 12/2021',
        responsibilities: [`Created a web application utilizing Django Framework backed by MySQL and HTML/CSS/JavaScript which tracks engineering
            artifacts located in various servers/websites which significantly improved engineers ability to reference other engineering
            documents and significantly reduce rework`,
            `Developed an API to easily allow transfer records from outdated Microsoft access database saving over 2,000 man hours when
            compared to manual entry`,
            ` Created technical documentation for legacy applications to enable
            technical success for future developers`,
            'Created GIT standard practices for FEM development through airplane programs reducing FEM development by 75%',
            `Utilized Gitlab CI/CD pipeline to create finite element pre/post checks that will automatically test finite element models commits for
            checks typically done manually thus significantly reducing manual workload by over 80%`,
            `Lead of the SoCal Propulsion site introducing tools and processes to the regional site`
        ]
    },
    {
      
        position: 'Senior Software Engineer;',
        duration: '01/2019 - 12/2021',
        responsibilities:  [`Utilized Pandas/Numpy to assist in the creation of metallic acreage checks that will automate structural analysis typically done
        manually thus allowing for less errors and rework`,
        `Created a data pipeline stress analysis summary template utilizing python data analytics tools (Pandas, Numpy) and visualization
        tools (Seaborn, Plotly) that gives end users insight on critical areas of analyzed parts as well as analysis trends`,
        ` Created technical documents that communicates analysis results to project teams, project managers and customers`,
        `Utilized Python’s data analytic packages (Pandas, Numpy) to quickly determine element load trends between different load cases
        reducing man hours by 75% versus manually importing data through excel`,
        `Created a script that would transform data from various case studies and automatically create respective run files to efficiently
        determine potential design space reducing manual work by 25%`
        ]
    }
]




   
    


export default class Experience extends Component {

    render() {
        return (
        <div >
            
                
                
                <h1>Work Experience</h1>
                <hr />


                {experience.map((exp, index)=> (
                    <div key={index}>
                        <h3>{exp.name}</h3>
                        <span className='position'><b>{exp.position}</b></span>
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