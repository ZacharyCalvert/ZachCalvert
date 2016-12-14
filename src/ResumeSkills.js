import React, { Component } from 'react';
import Cards from './Cards';

var skills = [

	{
		title: "Java",
		text: "I have been professionally working with Java since my first job in 2005, and was studying it in college before that.  I am up to date on Java 8 development and keeping an eye out for Java 9 / Project Jigsaw.  It is and will continue to be the focus of my career, but the methods in which it is being applied for cloud-based micro-services and Android applications change as required."
	},
	{
		title: "DevOps",
		text: "At XpressDocs I provided a Jenkins build pipeline with full CI automation and CD to a staging environment.  I deploy my own websites to Amazon AWS and Heroku, and use containerization locally for database hosting and tool evaluation.  I understand IT and development and the middle-ground needed for a full CI/CD pipeline.  I have worked with Jenkins at XpressDocs, Southwest Airlines, and Spireon.  I have aided administration and build engineering on Bamboo at Alcatel-Lucent.  I am familiar with Docker, Ansible, Vagrant and Bash.  Locally I have used Apache Archiva for artifact management and have used Nexus at Spireon and Southwest Airlines."
	}, 
	{
		title: "Spring",
		text: "I have been using Spring for IoC services for 8 years now, Spring MVC, Spring Security, and Spring data bindings for Hibernate and JPA.  I am confident and comfortable using Spring wiring and annotation based injection regardless the size of the project."
	}, 
	{
		title: "Hibernate",
		text: ""
	}, 
	{
		title: "Cloud",
		text: ""
	}, 
	{
		title: "NodeJS",
		text: ""
	},
	{
		title: "SQL",
		text: "I have used some form of SQL at every held position for the last 12 years.  At TransUnion, we had a PostgreSQL database as well as Oracle.  At Alcatel-Lucent, we had Oracle SQL as well as a GoldenGate for disaster recovery.  At XpressDocs, we had both a MySQL for front-end PHP content and a PostgreSQL for the press management data.  I am comfortable writing complex queries, "
	},
	{
		title: "NoSQL",
		text: "I have used some form of SQL at every held position for the last 12 years.  At TransUnion, we had a PostgreSQL database as well as Oracle.  At Alcatel-Lucent, we had Oracle SQL as well as a GoldenGate for disaster recovery.  At XpressDocs, we had both a MySQL for front-end PHP content and a PostgreSQL for the press management data.  I am comfortable writing complex queries, "
	},
	{
		title: "Front-End",
		text: "I am comfortable working on ReactJS, Angular, and Angular 2 code bases.  I consider myself a capable engineer within Javascript and NodeJS code bases.  I am up to date on HTML 5, CSS 3, Bootstrap 3 and working on preparation for Bootstrap 4.  "
	},
	{
		title: "CI/CD",
		text: "I have been working with and enhancing builds on Gradle and Maven for seven years, including designing the deployment automation for the CI/CD pipeline at XpressDocs."
	}, 
	{
		title: "Unit Testing",
		text: "I use unit testing extensively both as verification process and defensive coding.  As more teams become co-located, the need for unit testing cannot be emphasized enough.  I believe it is imperative to have strong business case testing, logic testing, data validation, and negative tests in place to maintain progress and prevent regression."
	}, 
	{
		title: "Scaling",
		text: "I am comfortable with a large array of toolkits for evaluating scaling, ranging from Apache JMeter, Tsung XMPP client, and ArtilleryJS scripts for REST API load testing.  I have provided guidance in scale planning for telematic administration software for Alcatel-Lucent prior to their purchase by Nokia.  I have worked with IT and DevOps departments for network monitoring, JVM heap analysis, JMX touch point review, and Thread dump analysis."
	}

]

class ResumeSkills extends Component {

  render() {
    return (
      <Cards cards={skills}/>
    );
  }
}
export default ResumeSkills;