import React, { Component } from 'react';

import './style/about.css';

var courseware = [
  {
    course: "AWS Serverless APIs & Apps - A Complete Introduction",
    certificate: "https://www.udemy.com/certificate/UC-3557W049"
  },
  {
    course: "Docker Mastery: The Complete Toolset From a Docker Captain",
    certificate: "https://www.udemy.com/certificate/UC-FA81E0BM"
  },
  {
    course: "JavaScript: Understanding the Weird Parts",
    certificate: "https://www.udemy.com/certificate/UC-MX7LDU2W"
  },
  {
    course: "MongoDB for Java: 101",
    certificate: "http://education.mongodb.com/downloads/certificates/be1d287aa2d649a6b256d8155b3a948c/Certificate.pdf"
  },
  {
    course: "Vim Masterclass",
    certificate: "https://www.udemy.com/certificate/UC-9RMSB22F"
  }
];

class Education extends Component {

  render() {
    return (
        <div className="col-sm-8 col-xs-12 resume">
          <h2>Education</h2>
          <h3>Online Courseware</h3>

          {courseware.map(function(entry, index) {
            return <p><a href={entry.certificate}>{entry.course}</a></p>;
          })}
          <h3>University of Texas at Arlington</h3>
          <h4>summa cum laude</h4>
          <p>
            Graduated summa cum laude with a Bachelor of Science focusing in breadth of languages ranging from C, C++, Java, Lisp, Prolog, and SQL.
          </p>
        </div>
    );
  }
}

export default Education;