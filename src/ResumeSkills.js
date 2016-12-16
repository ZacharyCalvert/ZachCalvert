import React, { Component } from 'react';
import Cards from './Cards';

var skills = [

	{
		title: "Java",
		text: "I have been professionally working with Java since my first job in 2005, and I was studying it in college prior to that.  I am up to date on Java 8 development and keeping an eye out for Java 9 / Project Jigsaw.  It is and will continue to be the focus of my career, but the methods in which it is being applied for cloud-based micro-services and Android applications change as required.  I have used a broad array of integration, development, and testing toolkits including Spring, Hibernate, JUnit, JMockit, JPA, Gradle, Groovy, Maven, IntelliJ, Eclipse, Ant, and more."
	},
	{
		title: "DevOps",
		text: "At XpressDocs I provided a Jenkins build pipeline with full CI automation and CD to a staging environment.  I deploy my personal websites to Amazon AWS and Heroku, and use Docker containerization locally for database hosting and tool evaluation.  I understand IT and development and know how to service the middle-ground needed for a full delivery pipeline.  I have worked with Jenkins at XpressDocs, Southwest Airlines, and Spireon.  I have aided administration and build engineering on Bamboo at Alcatel-Lucent.  I am familiar with Docker, Ansible, Vagrant and Bash for environment management.  I have used Gradle, Maven, Cobertura, and more for build scripting.  At XpressDocs I introduced Apache Archiva for artifact management and have used Nexus at Spireon, Southwest Airlines, and Alcatel-Lucent."
	},
	{
		title: "Agile",
		text: "I was introduced to Agile by a certified Scrum Master at Alcatel-Lucent in 2009 and it has proven to offer the highest rate of success as well as the highest rate of job satisfaction for any project I have been on since then.  I am a champion of the Agile process and have served as Scrum Master for my development team at Spireon.  At Southwest Airlines, I managed our Jira board as a Kanban process for the DevOps support needs being requested."
	}, 
	{
		title: "Spring",
		text: "I have been using Spring for IoC services for 8 years now, with my latest professional growth being the incorporation of Spring Boot micro-services.  I have used Spring MVC, Spring Security, and Spring data bindings for Hibernate and JPA.  I know how to properly apply the spring test runner for JUnit and I am confident and comfortable using Spring wiring and annotation based injection regardless the size of the project."
	}, 
	{
		title: "Hibernate",
		text: "I have used Hibernate ORM 2 through current 4 and studied the application of Hibernate OGM for NoSQL implementations such as MongoDB.  I am comfortable writing HQL, Javax persistence annotations, Hibernate criteria, and understand the complexities for proper application of Hibernate. "
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
		title: "NoSQL",
		text: "I have used some form of SQL at every held position for the last 12 years.  At TransUnion, we had a PostgreSQL database as well as Oracle.  At Alcatel-Lucent, we had Oracle SQL as well as a GoldenGate for disaster recovery.  At XpressDocs, we had both a MySQL for front-end PHP content and a PostgreSQL for the press management data.  I am comfortable writing complex queries, "
	},
	{
		title: "SQL",
		text: "I have used some form of SQL at every held position for the last 12 years.  At TransUnion, we had a PostgreSQL database as well as Oracle.  At Alcatel-Lucent, we had Oracle SQL as well as a GoldenGate for disaster recovery.  At XpressDocs, we had both a MySQL for front-end PHP content and a PostgreSQL for the press management data.  I am comfortable writing complex queries, "
	},
	{
		title: "Front-End",
		text: "I am comfortable working on ReactJS, Angular, and Angular 2 code bases.  I consider myself a capable engineer within Javascript and NodeJS code bases.  I am up to date on HTML 5, CSS 3, Bootstrap 3 and working on preparation for Bootstrap 4.  "
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