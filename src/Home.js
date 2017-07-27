import React, { Component } from 'react';
import AboutMe from './AboutMe';

class Home extends Component {

  render() {
    return (

    	<div className="container">
	    	<div className="row">

	    		<div className="col-sm-8 col-xs-12">
	    			<p>
		    			I'm a full-time software engineer living in Fort Worth, TX focused on cloud service development using Spring Boot microservice REST APIs and NoSQL technologies.  I have served roles in back-end development, DevOps, technical leadership, front-end UI design, CI/CD pipeline engineering, quality assurance, performance testing, and automation engineering.  I have embraced responsibilities as Scrum Master, Performance Engineer, Technical Lead, Automation Engineer, and Build Engineer.  I have proven to be versatile and a leader willing to tackle my team's needs as they arise.  I am an expert in Java, a capable full-stack engineer, and an architect in cloud technologies and REST APIs.
	    			</p>
		            <p>
			            My career path has been that of learning and professional growth.  My primary focus has been in Java back-end development, with a heavy leaning on Agile practices and Test Driven Development, but I have not shied away from picking up a variety of skills along the way.  Professionally, I have picked up Jmeter and Artillery for performance testing, Spock and JMockit for mocking and improved unit tests, Python for automation engineering, and Spring Boot for microservice architecture.  At home I have completed Mongo course MJ101, utilized Python for backups and file management, deployed my personal sites on both Amazon AWS and Heroku, developed Node JS React applications, read through a library of books on Safari Online, and watched hours of training material on Lynda.com and Udemy.  I have found modular arithmetic and cryptology to be worthy reads, Node and React to be a treat to remove the tediousness of front-end development, and the safety of strongly-typed Java with a wealth of mocked unit tests to be a comfort for back-end API and SaaS implementations. 
		            </p>
		            <p>
			            I have served as Technical Lead and Automation Engineer contracting on site at Southwest Airlines, 
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