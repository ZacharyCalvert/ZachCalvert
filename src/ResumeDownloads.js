import React, { Component } from 'react';
import AboutMe from './AboutMe';

class ResumeDownloads extends Component {

  render() {
    return (
        <div className="container">
          <div className="row">
          	<div className="col-sm-8 col-xs-12">
              <div className="col-sm-4 col-xs-5 resume-button"> 
                <a href="./resume/ZachCalvert_2pg.pdf" download="ZachCalvert.pdf">PDF<br/>4 Page</a>
              </div>
              <div className="col-sm-4 col-sm-offset-2 col-xs-offset-1 col-xs-5 resume-button"> 
                <a href="./resume/ZachCalvert_4pg.pdf"  download="ZachCalvert.pdf">PDF<br/>2 Page</a>
              </div>
              <div className="col-sm-4 col-xs-5 resume-button"> 
                <a href="./resume/ZachCalvert_2pg.docx"  download="ZachCalvert.docx">MS DOC<br/>2 Page</a>
              </div>
              <div className="col-sm-4 col-sm-offset-2 col-xs-offset-1 col-xs-5 resume-button"> 
                <a href="./resume/ZachCalvert_4pg.docx"  download="ZachCalvert.docx">MS DOC<br/>4 Page</a>
              </div>
              
            </div>
            <AboutMe/>
          </div>
        </div>
    );
  }
}
export default ResumeDownloads;