import React, { Component } from 'react';
import './style/recruiter.css';

var questions = [

  {
    question: "Where are you located?",
    answer: "I live in northeast Fort Worth near North Richland Hills in the 76118 zip code.  For my commute, portions of Dallas are more accessible than southwest Fort Worth.  Please see my commute page for my commute range."
  },
  {
    question: "Are you willing to relocate?",
    answer: "I have grown roots in the Dallas/Fort Worth metroplex and will not move my family.  Relocation is not a requirement I can meet at this time."
  },
  {
    question: "Will you travel for work?",
    answer: "Occasional travel for team building or co-located sites will not be a problem.  Required weekly travel is not a requirement I can meet at this time."
  },
  {
    question: "What is your compensation range?",
    answer: "For full-time salary, I'm looking for $130,000 plus benefits, PTO, and bonus.  For contracting, I am interested in $80/hour as W2, or corp-to-corp contracting through my company Hemera, Inc. at $150/hour."
  },
  { 
    question: "Are you willing to telecommute?",
    answer: "After working from home for several years, I've determined I prefer having an office with face-to-face interactions.  Full-time telecommuting is not a requirement I can meet at this time."
  },
  {
    question:"What perks interest you?",
    answer: "Strong benefits offering with excellent health care, FSA, DCA, vision, and education reimbursement such as Lynda.com or Safari Online.  Option to occasionally work from home.  On-site gym or fitness center.  Core schedule with no production support requirements (no after-hours)."
  },
  {
    question:"What job title's interest you?",
    answer:"Software Architect, Principal Architect, DevOps Engineer, or Technical Lead."
  },
  {
    question: "Could you describe your ideal job?", 
    answer: "Casual atmosphere practicing Agile methodologies on cutting edge micro-service cloud technologies with a DevOps team, IT Ops, QA team and Dev team.  Code coverage would be in the 90% range with full automated CI deployment to stage and production.  Runbooks for production issues are well prepared and technical writers are developing documentation with the architecture staff.  Production outages are non-existent with a 5 sigma uptime and production updates occur via automated daytime executions.  While this is my ideal job, I am realistic about this being the ultimate goal of a software team and not a commonly found reality.  I have not yet participated in such a job (or I would still be there).  "
  }
];

class RecruiterQuestions extends Component {
	render() {

    return (

    	<table className="recruiter-questions">
        <tbody>
          {questions.map(function(entry, index) {
            var cssClassName = (index % 2 === 0) ? 'alternate' : 'normal';
            return <tr className={cssClassName} key={index}><td>{entry.question}</td><td className="recruiter-answer">{entry.answer}</td></tr>;
          })}
        </tbody>
      </table>
    );
  }
}


export default RecruiterQuestions;