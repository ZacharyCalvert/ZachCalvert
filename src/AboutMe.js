import React, { Component } from 'react';

import './style/about.css';

class AboutMe extends Component {

  render() {
    return (
        <div className="col-sm-3 col-sm-offset-1 hidden-xs sidebar">
          <div id="about" className="sidebar-module sidebar-module-inset">
            <h4>About Me</h4>
            <img role="presentation" className="about" src="./img/CroppedCircle.jpg"></img>
            <p className="about">
            I'm a senior software engineer in Fort Worth, TX currently working on automotive telematics 
            systems (ATS) for <a href="http://www.spireon.com/">Spireon, Inc.</a>
            </p>

            <ul className="about-me-links">
              <li><a href="https://www.linkedin.com/in/zachary-calvert" target="_blank">LinkedIn</a></li>
              <li><a href="https://github.com/ZacharyCalvert" target="_blank">GitHub</a></li>
              <li><a href="mailto:Zach&#67;alvert&#64;gmail.com" target="_blank">GMail</a></li>
              <li><a href="https://twitter.com/zacharycalvert" target="_blank">@Twitter</a></li>
            </ul>
          </div>
        </div>
    );
  }
}

export default AboutMe;