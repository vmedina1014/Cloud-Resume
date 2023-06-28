import React, { Component } from 'react'

const honor_activities = [
    `Design/Structural Engineer Intern, Pratt & Whitney, Summer 2012-2014`,
    `Boeing Engineering Accelerated Hiring Initiative (EAHI): Alumni, Mentor, and SoCal recruitment focal`,
    `Engineer’s Council: Future Technology Leader Award 2018, Distinguished Engineering Project Award`,
    `BEYA: Future Leaders 2019`,
    `Boeing Engineer’s Week Webmaster (2016-2019)`,
    'Graduate Teaching Assistant, Carnegie Mellon University: Applied Finite Element Analysis'

]








export default class activities extends Component {

    render() {
        return (
            <div >



                <h1>Honors/Activities</h1>
                <hr />{


                honor_activities.map((activity, index) => (
                <span><p className='honor'>
                    {activity}
                </p> </span>     ))}
            </div>


        );
    }
}