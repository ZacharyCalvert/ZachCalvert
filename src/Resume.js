import React, { Component } from 'react';
import ResumeContent from './ResumeContent';
import ResumeDownloads from './ResumeDownloads';
import ResumeSkills from './ResumeSkills';
import ResumeReferences from './ResumeReferences';
import SubNav from './SubNav';
import './style/resume.css';

var subNavEntries = [
  {
    page: 'bio',
    text: 'Bio'
  },
  {
    page: 'downloads',
    text: 'Download'
  },
  {
    page: 'references',
    text: 'References'
  },
  {
    page: 'skills',
    text: 'Skills'
  }
];

class Resume extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedSubNav: "bio" };
    this.handleActionChange = this.handleActionChange.bind(this);
  }

  handleActionChange(updatedSelectedPage) {
    this.setState({selectedSubNav: updatedSelectedPage});
  }

  render() {

    var selection = this.state.selectedSubNav;
    var toRender = (selection === "downloads" ? <ResumeDownloads/> :
      selection === "references" ? <ResumeReferences/> :
      selection === "skills" ? <ResumeSkills/> :
      <ResumeContent/> );

    return (

      <div>
        <SubNav entries={subNavEntries} prefix='resume' pageChanged={this.handleActionChange} selectedSubNav={this.state.selectedSubNav} />
        {toRender}
      </div>
    );
  }
}
export default Resume;
