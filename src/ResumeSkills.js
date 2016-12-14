import React, { Component } from 'react';
import Cards from './Cards';

var skills = [
	{
		title: "Spring",
		text: "I have been using Spring for IoC services for 8 years now, Spring MVC, Spring Security, and Spring data bindings for 6.  I am confident and comfortable using Spring wiring and annotation based injection regardless the size of the project."
	},
	{
		title: "Java",
		text: "I have been professionally working with Java since my very first job in 2005, and was studying it in college before that.  I am up to date on Java 8 development and keeping an eye out for Java 9 / Project Jigsaw.  It is and will continue to be the focus of my career, but the methods in which it is being applied for cloud-based microservices and Android applications change as required."
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