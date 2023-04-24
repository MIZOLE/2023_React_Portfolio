import React, { Component } from "react";

class Stuff extends Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>

        <div>
          <h3>  crime-spotter-405</h3>
          <p>The app is to help uber drivers and passengers from crime issues they encounter daily in the Western Cape by reporting crime at the given time and spot on the app based on the type of crime, place and weather where you a victim or did you witness it.
            You can also see crime statistics of the crime hotspot zones for better security and clarity before attending a request. 
          </p>
          <a href="https://crime-spotter-405.herokuapp.com/">View App</a>
          <h3>City Maintanance website</h3>
          <p>This is a website that is designed for community memebers and businesses to address their maintanance isssues to private maintanance companies in Cape Town so that they can get assistance quickly based on their need.</p>
          <a href="https://aquamarine-biscuit-375557.netlify.app/">View App</a>
          <h3>CollaboIt</h3>
          <p>CollaboIt is a website where entrepreneurs, and web developer share ideas and they can outsource for idea collaborations as future business parteners, and team memebers.</p>
          <a href="https://marvelous-truffle-d716ac.netlify.app/">View App</a>          
        </div>

        <h3></h3>

      </div>
    );
  }
}

export default Stuff;