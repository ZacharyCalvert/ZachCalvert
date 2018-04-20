import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Education from './Education';

class ResumeContent extends Component {

  render() {
    return (

      <div className="container">
        <div className="row">

          <div className="col-sm-8 col-xs-12 resume">
          	<h1 className="resume">Full-Stack Software Architect</h1>
	    			<h2>Summary</h2>
	    			<p>
	    				Skilled Software Engineer with 13 years industry experience focused in full-stack development using primarily Java technologies. Professional experience in Agile methodologies, Continuous Integration, RESTful services, Atlassian utilities, unit testing, performance testing, Linux server diagnostics, cloud server virtualization, and requirement analysis.
	    			</p>
	    			<h2>Proficiencies</h2>
	    			<h4>Java - 13 years</h4>
	    			<p>
							Spring, Spring Boot, Ehcache, Hibernate, OSGi, JUnit, CXF, JDBC, ServiceMix, Maven, JMockit, Camel, Groovy, Gradle, Spock 
	    			</p>
						<h4>NoSQL - 4 years</h4>
						<p>
							Amazon DynamoDB, MongoDB, Redis, Cassandra
						</p>
	    			<h4>Atlassian Development Utilities - 8 years</h4>
	    			<p>
							BitBucket, Jira, Bamboo, Confluence, FishEye
	    			</p>
						<h4>Message Queuing Systems - 5 years</h4>
	    			<p>
							Kafka, RabbitMQ, ActiveMQ, Tibco
	    			</p>
						<h4>SQL - 12 years</h4>
	    			<p>
							Oracle, MySQL, PostgreSQL, MS SQL Server
	    			</p>
						<h4>Continuous Integration - 8 years</h4>
	    			<p>
							Jenkins, Bamboo, Hudson, Automated Deployment
	    			</p>
						<h4>Virtualization - 6 years</h4>
	    			<p>
							Amazon Lambda, Amazon EC2, Heroku, Docker, Ansible, Vagrant, VirtualBox, VMware vCloud
	    			</p>
						<h4>Linux - 8 years</h4>
	    			<p>
							Server management, bash scripting, installation, performance monitoring
	    			</p>
						<h4>Development Toolkits - 13 years</h4>
	    			<p>
							Git, IntelliJ, Eclipse, Subversion, Ant, SecureCRT, Babun, Cygwin
	    			</p>
						<h4>Front-End Web - 5 years</h4>
	    			<p>
							ReactJS, Bootstrap 3, Jasmine, JQuery, Javascript, HTML 5, CSS
	    			</p>
						<h4>Security Mitigation - 9 years</h4>
	    			<p>
							TLS/SSL, WireShark, salted hashing/encryption, firewall configuration
	    			</p>
						<h4>Server Clustering, Scaling, and Disaster Recovery - 8 years</h4>
	    			<p>
							REST-based cloud scaling, Geo-redundancy, recovery analysis
	    			</p>
						<h4>Performance Testing - 7 years</h4>
	    			<p>
							JMeter, Artillery, Thread Dump Analyzer, Garbage Collection Viewer, JConsole 
	    			</p>
						<h4>Endpoint Management - 3 years</h4>
	    			<p>
							APNS, GCM, XMPP, Ejabberd, Erlang
	    			</p>

	    			<h2>Experience</h2>
						<h3>HCL - Fort Worth, TX</h3>
						<h4>February, 2017 - Current</h4>
						<h4>Enterprise Cloud Architect</h4>
						<p className="position">
							Joined HCL to provide enterprise architecture vision and technical leadership on-site at BNSF.
						</p>
						<h5>OpenShift - 3 Months, Agile Project</h5>
						<p>
							Responsible for working with DevOps team for vision for application development and deployment as container services.  Developed IaaS service to integrate existing TLS issuance services and Remedy workflows to offer certificate automation for new containers.  Supporting moving towards full automation for application build to scaled image deployment.
						</p>
						<h5>OpenShift Monitoring Solutions - 3 Months, Agile Project</h5>
						<p>
							Developed minimum viable product definitions for monitoring solutions for the BNSF modernization platform.  Provided integration services, API evaluations and performance validating implementations for determining best fit monitoring solution for OpenShift.  Particularly focused on Kubernetes Daemonset solutions, offering full visibility on outages and root cause analysis.
						</p>
						<h5>JWT Integration - 3 Months, Agile Project</h5>
						<p>
							Developed Spring Boot starter libraries integrating with existing BNSF infrastructure to centralize identity management.  Developed a transition path for existing JSP applications and legacy services.
						</p>
						<h5>IBM Blue Mix - 3 Months, Agile Project</h5>
						<p>
							Provided evaluation and adoption guidance for integrating development pipelines to BlueMix, relying on the Cloud Foundry APIs and command line services.
						</p>
	    			<h3>Spireon - Irving, TX</h3>
	    			<h4>July 2016 - February 2017</h4>
	    			<h4>Senior Software Engineer</h4>
	    			<p className="position">
							Joined a Spring Boot Microservice REST API software team developing, testing, and reviewing security for services deployed on Amazon AWS as a Senior Software Engineer. 
						</p>
						<h5>JWT Identity Management - 3 Months, Agile Project</h5>
						<p>
							RESTful security transition to JWT identity services served via a Tyk Gateway and locked down using nginx reverse proxies.  Responsible for implementation of the caching integration to Redis and ehCache on a Java 8 Spring Boot microservice, with a JPA based MySQL integration.  Personally achieved 80% unit testing coverage of both lines and branches with cobertura code coverage delivered via Jenkins CI builds.  Unit testing with JUnit 4, using the Spring JUnit class runner.  Implemented CXF REST services.  Localized authentication and principal managed via Spring Security.  Negative tests, security tests, and integration tests executed using the NodeJS Frisby module.  Worked directly with QA engineering staff for performance testing using the NodeJS Artillery module.
						</p>
						<h5>Platform API - 3 months, Agile Project</h5>
						<p>
							RESTful service managing vehicle asset exposure and geo-locational data.  Responsible for reviewing the existing Elastic Search integration, improving search behavior, and providing business logic testing to available searches.  Improved both unit testing code coverage, negative test case coverage, and security testing using Frisby and JUnit 4.  Aided in improving the gradle build process and improving Jenkins CI builds and automated integration testing.
						</p>
						<h3>TEKsystems - Dallas, TX</h3>
						<h4>March 2016 - July 2016</h4>
						<p className="position">
							Contractor for TEKsystems as Java Technical Lead at Southwest Airlines HQ serving a team of developers managing a passenger data service which exposes Oracle persisted content via SOAP APIs and updates the same data warehouse via consuming messages off of a bridged Tibco Message Queue built on JMS.  
						</p>
						<h5>Python Automation Initiative - 3 Months, Iterative Project</h5>
						<p>
							Personally recognized an opportunity to improve speed of delivery and reduce manual error with automation of an internal deployment process.  Using Python, an error prone deployment involving manual HTML form submission reduced team’s involvement by 35 man -hours per week.  
						</p>
						<h5>PDS Retirement - 3 Months, Waterfall Project</h5>
						<p>
							Participated as technical lead of support staff to aid in monitoring of a migration and retirement of an XML warehouse.
						</p>
						<h3>Xpressdocs- Fort Worth, TX</h3>
						<h4>July 2015 - March 2016</h4>
						<p className="position">
							Joined a print firm delivering integration solutions to digital print equipment for real estate marketing, business cards, and advertising campaigns.  
						</p>
						<h5>JDserv - 6 Months, Iterative Project</h5>
						<p>
							Responsible for assisting the migration of a team from waterfall development to Agile Methodologies. Provided development leadership in updating products from Java 6 to Java 8, Ant to Maven, develop CI and CD Jenkins builds, work with IT to deliver JMX monitoring touch points, and aid in developing a Jira workflows.
						</p>
						<h5>MelissaData Smart Mover - 1 Month, Waterfall Project</h5>
						<p>
							Independently developed an integration service that provided a 750% performance improvement in CASS and NCOA address validations using a producer/consumer design pattern over REST API.  Provided a JAR artifact deliverable with 97% code coverage and end-to-end integration tests against a public sandbox test service.
						</p>
						<h3>Alcatel-Lucent, Contractor - Austin, TX</h3>
						<h4>June 2009 - April 2015</h4>
						<p className="position">
							Provided software contracting services for the telecommunication industry including endpoint management, mobile services, and electric smart metering network solutions.
						</p>
						<h5>Mobile Push Services - 4 Months, Agile Project</h5>
						<p>
							Designed and implemented integration services for notifying mobile customers of service outages based on network diagnostics and manual batch notifications.  Integrations provided for both Google Cloud Messaging and Apple Push Notification Service.  Responsibilities included architecture, implementation, unit testing, performance testing, integration testing, and installation scripting for Linux servers.
						</p>
						<h5>Smart Device OSGi Services - 24 Months, Agile Project</h5>
						<p>
							Designed and implemented REST API services for mobile and browser based applications allowing us to reach new customer bases, including the electric smart metering device market.  Responsible for server implementation, requirement gathering, performance testing, security testing, Linux installs, and service design.  
						</p>
						<h5>Endpoint Communication System -	6 Months, Agile Project</h5>
						<p>
							Designed and developed Spring-DM OSGi Apache ServiceMix bundles for a push notification architecture supporting PC, Mac, and mobile platforms expanding client installations by hundreds of thousands of units.  Responsibilities included server design, implementation, unit testing and directing remote test staff for QA testing and performance testing.
						</p>
						<h5>Client Application Framework - 15 Months, Agile Project</h5>
						<p>
							Developed a PC solution for an application store built on top of OpenJDK and the Apache Felix OSGi stack.  Responsibilities included implementation of a locally installed Jetty client service for accessing PC help flows and account management.
						</p>
						<h5>Broadband Care Manager - 6 Months, Agile Project</h5>
						<p>
							Provided support in moving the legacy EAR project suite from manually built to a robust Maven build system centered upon a subversion repository with Atlassian build and project management tools.  Improved in-house Eclipse RCP workflow utility and reduced user installation errors with a newly developed NSIS installer.
						</p>
						<h3>TransUnion - Austin, TX</h3>
						<h4>January 2005 - April 2009</h4>
						<p className="position">
							Developed flood research solutions as well as automated home valuation software for real estate and credit reporting industries.
						</p>
						<h5>Hornet - 12 Months, Iterative Project</h5>
						<p>
							Improved automation output by a factor of 5,000 reducing hardware cost and improving customer feedback with faster turnaround for batch requests.  Major factors contributing to the improvement included a new geospatial indexing architecture, custom RAM management, and multi-threading techniques.
						</p>
						<h5>Hard Rain - 24 Months, Iterative Project</h5>
						<p>
							Developed a flood research application integrating many different data providers into an Eclipse RCP (OSGi) based application.  Provided map synchronization and various research and geospatial toolsets to achieve pinpoint accuracy for floodplain identification.
						</p>
						<Education/>
	      	</div>

				<AboutMe/>
        </div>
      </div>
    );
  }
}
export default ResumeContent;