import React, { Component } from 'react';
import Cards from './Cards';

var skills = [

	{
		title: "Java",
		text: "I have been professionally working with Java since my first job in 2005, and I was studying it in college prior to that.  I am up to date on Java 8 development and keeping an eye out for Java 9 / Project Jigsaw.  It is and will continue to be the focus of my career, but the methods in which it is being applied for cloud-based micro-services and Android applications change as required.  I have used a broad array of integration, development, and testing toolkits including Spring, Hibernate, JUnit, JMockit, JPA, Gradle, Groovy, Maven, IntelliJ, Eclipse, Ant, and more."
	},
	{
		title: "DevOps",
		text: "At XpressDocs I provided a Jenkins build pipeline with full CI automation and CD to a staging environment.  I deploy my personal websites to Amazon AWS and Heroku, and use Docker containerization locally for database hosting and tool evaluation.  I understand IT and development and know how to service the middle-ground needed for a full delivery pipeline.  I have worked with Jenkins at XpressDocs, Southwest Airlines, and Spireon.  I have aided administration and build engineering on Bamboo at Alcatel-Lucent.  I am familiar with Docker, Ansible, Vagrant and Bash for environment management.  I have used Gradle, Maven, Python, and Bash for build scripting.  At XpressDocs I introduced Apache Archiva for artifact management and have used Nexus at Spireon, Southwest Airlines, and Alcatel-Lucent."
	},
	{
		title: "Agile",
		text: "I was introduced to Agile by a certified Scrum Master at Alcatel-Lucent in 2009 and it has proven to offer the highest rate of success as well as the highest rate of job satisfaction for any project I have been on since then.  I am a champion of the Agile process and have served as Scrum Master for my development team at Spireon.  At Southwest Airlines, I managed our Jira board as a Kanban process for the DevOps support needs being requested."
	}, 
	{
		title: "Spring",
		text: "I have been using Spring for IoC services for 8 years now, with my latest professional growth being the incorporation of Spring Boot micro-services.  I have used Spring MVC, Spring Security, and Spring data bindings for Hibernate and JPA.  I know how to properly apply the spring test runner for JUnit testing and I am confident and comfortable using Spring wiring and annotation based injection regardless the size of the project."
	}, 
	{
		title: "Hibernate",
		text: "I have used Hibernate ORM 2 through current 4 and studied the application of Hibernate OGM for NoSQL implementations such as MongoDB.  I am comfortable writing HQL, Javax persistence annotations, Hibernate criteria, and understand the complexities for proper application of Hibernate. "
	}, 
	{
		title: "Cloud",
		text: "I have developed REST APIs using Java since 2010 for Alcatel-Lucent and have been developing Spring Boot micro-services for Spireon ATS solutions.  I understand the complexities of CAP theorem and CQRS, the application of ACID vs BASE data modeling, sharding, capacity scaling and planning for data warehousing, service responsiveness, and event processing.  "
	}, 
	{
		title: "NodeJS",
		text: "I understand how to apply NodeJS in a variety of ways ranging from API implementation using Express, performance testing using Artillery, API testing using Frisby, front-end implementation using Bootstrap and ReactJS, and implementation Unit testing using Jasmine.  While I do not consider my strongest point to be my Javascript prowess, I am familiar with the NodeJS infrastructure, benefits, and disadvantages."
	},
	{
		title: "NoSQL",
		text: "I have used MongoDB, Redis, Ehcache, and Elastic Search at Spireon and have completed the MongoDB MJ101 course.  I have studied Cassandra and CouchDB in my spare time.  I understand CAP theorem, sharding, CQRS, and the pain points for eventual consistency.  I am confident I can articulate when to apply a NoSQL solution vs providing a transactional implementation."
	},
	{
		title: "SQL",
		text: "I have used some form of SQL at every held position for the last 12 years.  At TransUnion, we had a PostgreSQL database as well as Oracle.  At Alcatel-Lucent, we had Oracle with GoldenGate for disaster recovery.  At XpressDocs, we had both a MySQL for front-end PHP content and a PostgreSQL database for the press management data.  I am comfortable writing complex queries across a variety of SQL servers."
	},
	{
		title: "Front-End",
		text: "I am comfortable working on ReactJS, Angular, and Angular 2 code bases.  I consider myself a capable engineer within Javascript and NodeJS.  I am up to date on HTML 5, CSS 3, Bootstrap 3 and 4.  I understand CDN services, Javascript minification, and mobile page design.  My weakest point regarding front-end is that I am not a very artistic engineer and need to be paired with a strong graphic designer to provide a visually appealing user interface.  I am excellent at providing functional implementations, but would not claim to be a designer."
	}, 
	{
		title: "Unit Testing",
		text: "I use unit testing extensively both as verification process and defensive coding.  As more teams become co-located, the need for unit testing cannot be emphasized enough.  I believe it is imperative to have strong business case testing, logic testing, data validation, and negative tests in place to maintain progress and prevent regression."
	}, 
	{
		title: "Atlassian",
		text: "I am fully versed in the variety of Atlassian offerings.  I have used Jira, Confluence, BitBucket, Bamboo, and FishEye since 2010.  I have aided in managing the Planning Board at both Southwest Airlines and Spireon.  At XpressDocs I advised on our Jira ticket work-flow design.  I am experienced writing documentation on Confluence including UML using Gliffy.  I administered BitBucket projects and team privileges at XpressDocs including Jenkins SSH integration."
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