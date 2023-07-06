import React, { Component } from 'react'


class visitor_count extends Component {

 
  componentDidMount(){    
  const visitorAPI = 'https://xyo1s5kh09.execute-api.us-east-1.amazonaws.com/';
  const countElement = document.getElementById("visitor_count");
    fetch(visitorAPI, {method: 'POST'})
    .then(res => res.json())
    .then(data => { 
    countElement.innerHTML = data.visitor_count})
     
  }

  


  render() {
    return (
      <div>

        <p id = 'visits'>This resume has been visited  <span id='visitor_count'>...</span> times!</p>

        </div>
    )
  }
}

export default visitor_count;
