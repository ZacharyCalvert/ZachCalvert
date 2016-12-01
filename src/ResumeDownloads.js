import React, { Component } from 'react';
import AboutMe from './AboutMe';

class ResumeDownloads extends Component {

  render() {
    return (
        <div className="container">
          <div className="row">
          	<div className="col-sm-8 col-xs-12 center-block">
              <ul className="list-inline">
	              <li className="px-2"><a href="./resume/ZachCalvert_2pg.pdf" download="ZachCalvert.pdf">2pg-pdf</a></li>
	              <li><a href="./resume/ZachCalvert_4pg.pdf"  download="ZachCalvert.pdf">4pg-pdf</a></li>
	              <li><a href="./resume/ZachCalvert_2pg.docx"  download="ZachCalvert.docx">2pg-docx</a></li>
	              <li><a href="./resume/ZachCalvert_4pg.docx"  download="ZachCalvert.docx">4pg-docx</a></li>
              </ul>
            </div>
            <AboutMe/>
          </div>
        </div>
    );
  }
}
export default ResumeDownloads;