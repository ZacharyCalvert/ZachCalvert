import React, { Component } from 'react';
import AboutMe from './AboutMe';

class Resume extends Component {

  render() {
    return (
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 center-block">
          Downloads:
            <ul className="list-inline">
            <li className="px-2"><a href="./resume/ZachCalvert_2pg.pdf" download="ZachCalvert.pdf">2pg-pdf</a></li>
            <li><a href="./resume/ZachCalvert_4pg.pdf"  download="ZachCalvert.pdf">4pg-pdf</a></li>
            <li><a href="./resume/ZachCalvert_2pg.docx"  download="ZachCalvert.docx">2pg-docx</a></li>
            <li><a href="./resume/ZachCalvert_4pg.docx"  download="ZachCalvert.docx">4pg-docx</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Resume;