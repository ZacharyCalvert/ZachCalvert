import React, { Component } from 'react';

class AboutMe extends Component {

  render() {
    return (
        <div className="col-sm-3 col-sm-offset-1 hidden-xs sidebar">
          <div className="sidebar-module sidebar-module-inset">
            <h4>About Me</h4>
            <p>
            I'm a senior software engineer in Fort Worth, TX currently working on automotive telematics 
            systems (ATS) for <a href="http://www.spireon.com/">Spireon, Inc.</a>
            </p>
          </div>
        </div>
    );
  }
}

export default AboutMe;