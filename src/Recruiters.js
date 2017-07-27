import React, { Component } from 'react';
import AboutMe from './AboutMe';
import RecruiterQuestions from './RecruiterQuestions';
import RecruiterCommute from './RecruiterCommute';
import SubNav from './SubNav';
import _ from "lodash";

var subNavEntries = [
  {
    page: 'questions',
    text: 'questions'
  },
  {
    page: 'commute',
    text: 'commute'
  }
];


class Recruiters extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedSubNav: "questions" };
    this.handleActionChange = this.handleActionChange.bind(this);
  }

  handleActionChange(updatedSelectedPage) {
    this.setState({selectedSubNav: updatedSelectedPage});
  }

  renderQuestions() {
    return (

      <div className="container">
        <div className="row">

          <div className="col-sm-8 col-xs-12">
            <p>
              If you are a recruiter looking for a Lead Java Engineer, I have put this page together with the intent of serving you.  Below are the most commonly asked recruiting questions that will help us filter to best fit opportunities.
            </p>
              <RecruiterQuestions/>
          </div>
          <AboutMe/>
        </div>
      </div>
    );
  }

  renderCommute() {
    return (

      <div className="container">
        <div className="row">
          <RecruiterCommute/>
        </div>
      </div>
    );
  }

  render() {

    var selection = this.state.selectedSubNav;
    var toRender = (selection === "commute" ? this.renderCommute() : this.renderQuestions());

    return (
      <div>
        <SubNav entries={subNavEntries} prefix='recruiters' pageChanged={this.handleActionChange} selectedSubNav={this.state.selectedSubNav} />
        {toRender}
      </div>
    );
  }
}

export default Recruiters;