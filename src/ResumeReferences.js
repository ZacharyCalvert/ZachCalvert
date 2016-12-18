import React, { Component } from 'react';
import Cards from './Cards';


var references = [

	{	
		name: "Tyler Burkey",
		title: "Delivery Manager",
		company: "TEKsystems",
		linkedIn: "https://www.linkedin.com/in/tyler-burkey-mba-6114a08",
		text: "I worked for Tyler on-site at Southwest Airlines HQ in Dallas, Texas.", 
		type: "profile"
	},
	{
		name: "Dhineshlal Jaisankar",
		title: "Senior Software Engineer",
		company: "TEKsystems",
		linkedIn: "https://www.linkedin.com/in/dhineshlal-somin-jaisankar-49ab3327",
		text: "I served with Dhinesh on-site at Southwest Airlines as Technical Lead, providing guidance on our automation opportunities, Oracle SQL, and Jenkins.", 
		type: "profile"
	},
	{
		name: "Michael Speer",
		title: "Scrum Master",
		company: "Alcatel-Lucent",
		linkedIn: "https://www.linkedin.com/in/michael-speer-7aa00b2",
		text: "I worked under Michael Speer as a Senior Software Engineer contracting for Alcatel-Lucent in Austin, TX.", 
		type: "profile"
	},
	{
		name: "Mahesh Rayudu",
		title: "Software Development Manager", 
		company: "XpressDocs", 
		linkedIn: "https://www.linkedin.com/in/maheshrayudu",
		text: "I worked with Mahesh designing print asset management for XpressDocs as a Senior Software Engineer.", 
		type: "profile"
	},
	{
		name: "Chris Row",
		title: "Systems Administration Manager", 
		company: "XpressDocs", 
		linkedIn: "https://www.linkedin.com/in/chrisrow",
		text: "I worked with Chris at XpressDocs designing our CI/CD pipeline with as Senior Software Engineer.", 
		type: "profile"
	},
	{
		name: "Michael Sierra",
		title: "Workflow Specialist", 
		company: "XpressDocs", 
		linkedIn: "https://www.linkedin.com/in/michael-sierra-3bb01429",
		text: "I worked with Michael Sierra designing our press integration services.", 
		type: "profile"
	}
]

class ResumeReferences extends Component {

  render() {
    return (
      <Cards cards={references}/>
    );
  }
}
export default ResumeReferences;