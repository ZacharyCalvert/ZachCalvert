import React, { Component } from 'react';
import AboutMe from './AboutMe';

class ResumeDownloads extends Component {

  render() {
    return (
        <div className="container">
          <div className="row">
          	<div className="col-sm-8 col-xs-12">
              <div className="col-sm-4 col-xs-5 resume-button"> 
                <a href="./resume/ZachCalvert.pdf" download="ZachCalvert.pdf">PDF</a>
              </div>
              <div className="col-sm-4 col-sm-offset-2 col-xs-offset-1 col-xs-5 resume-button"> 
                <a href="./resume/ZachCalvert.docx"  download="ZachCalvert.docx">MSDOC</a>
              </div>
              
            </div>
            <AboutMe/>
          </div>
        </div>
    );
  }
}
export default ResumeDownloads;