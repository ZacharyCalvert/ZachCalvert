import React, { Component } from 'react';
import AboutMe from './AboutMe';

class Home extends Component {

  render() {
    return (

    	<div className="container">
	    	<div className="row">

	    		<div className="col-sm-8 col-xs-12">
	    			<p>
		    			I'm a software engineer living in Fort Worth, TX focused on cloud service development using Kubernetes, Spring Boot microservice REST APIs, and NoSQL technologies.  I have served roles in DevOps, security, back-end development, technical leadership, front-end UI design, CI/CD pipeline engineering, quality assurance, performance testing, and automation engineering.  I have embraced responsibilities as Enterprise Solution Architect, DevOps Engineer, Java Tech Lead, Scrum Master, Performance Engineer, Automation Engineer, and Build Engineer.  I have proven to be versatile and a leader willing to tackle my team's needs as they arise.  I am an expert in Java, a DevOps practitioner, a capable full-stack engineer, and an architect in cloud technologies and REST APIs.
	    			</p>
						<p>
							Security has been an area of professional focus as I believe it is both a required understanding for today's engineers and separates the experts from the novices.  I have taken time to learn and understand TLS for network transactions and mTLS for service-to-service authentication, MFA, salted password hashing and BCrypt algorithms for password verification, JWT (RFC 7519) for authentication and authorization, Spring Security for micro-service principal definition, encryption at rest for data protection on compromised machines, and more.  I have read through Bruce Schneier's Applied Cryptography to gain insight on ciphers, signatures, non-repudiation, and encryption.  I apply security best-practices both professionally and at home.   
						</p>
		        <p>
			        For most of my career, my primary focus has been in Java back-end development, with a heavy leaning on Agile practices and Test Driven Development, but I have not shied away from picking up a variety of skills along the way.  Professionally, I have picked up Jmeter and Artillery for performance testing, Spock and JMockit for mocking and improved unit tests, Python for automation engineering, and Spring Boot for microservice architecture.  At home I have completed a variety of courseware on Udemy ranging from Kafka to VIM.  I have taken Mongo course MJ101 from MongoDB University, utilized Python for backups and file management, deployed my personal sites on Google Cloud, Amazon AWS, and Heroku, developed Node JS React applications, and read through a library of books on Safari Online.
		        </p>
		        <p>
			        I have served as Enterprise Solution Architect at BNSF developing security infrastructure and private key material automation integrating with an OpenShift platform, provided Java technical leadership and DevOps leadership on site at Southwest Airlines, 
			        participated in Life-of-Loan home valuation processing for TransUnion, implemented multi-million 
			        endpoint telematics server infrastructure for Alcatel-Lucent, and more.  My career path has been 
			        exciting and engaging, and I will do nothing less than continue that trend for the rest of my career.
		        </p>
	      	</div>

				<AboutMe/>
	        </div>
        </div>

    );
  }
}

export default Home;