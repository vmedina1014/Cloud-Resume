import React, { Component } from 'react'

const skills = [`Python`, 'JavaScript', 'SQL', 'HTML', 'CSS', 'AWS', 'GIT',
  'CI/CD', 'Django', 'Pandas', 'Numpy', 'Linux', 'MySQL']


class Skills extends Component {

  render() {
    return (
      <div >
        <h3 className="sidebar-section">Skills</h3>
        {
          skills.map((skills, index) => (

            <span>
              <span className='skills'>
                {skills}
              </span>
              &nbsp;
            </span>

          )
          )
        }


      </div>
    )
  }
}

export default Skills;