import React, { Component } from 'react';
import AboutMe from './AboutMe';

var $ = require('jquery');

class ResumeDownloads extends Component {

  downloadClick(event) {
    var fromClick = event.target.id;
    var targetLink = '#' + fromClick + '_download';
    $(targetLink)[0].click();
  }

  render() {
    return (
        <div className="container">
          <div className="row">
          	<div className="col-sm-8 col-xs-12">
              <div id="pdf" onClick={this.downloadClick.bind(this)} className="col-sm-4 col-xs-5 resume-button"> 
                PDF
              </div>
              <div id="docx" onClick={this.downloadClick.bind(this)} className="col-sm-4 col-sm-offset-2 col-xs-offset-1 col-xs-5 resume-button"> 
                DOC
              </div>
              
            </div>
            <AboutMe/>
          </div>
          <a className="resume-download" download="ZachCalvert" href="./resume/ZachCalvert.pdf" id="pdf_download">PDF Link</a>
          <a className="resume-download" download="ZachCalvert" href="./resume/ZachCalvert.docx" id="docx_download">MSDOC Link</a>
        </div>
    );
  }
}
export default ResumeDownloads;