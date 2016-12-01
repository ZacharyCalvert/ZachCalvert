import React, { Component } from 'react';
import ResumeContent from './ResumeContent';
import ResumeDownloads from './ResumeDownloads';
import ResumeRoles from './ResumeRoles';
import ResumeSkills from './ResumeSkills';
import SubNav from './SubNav';

var subNavEntries = [
  {
    page: 'resume-bio',
    text: 'Bio', 
    href: '#resume-bio'
  },
  {
    page: 'resume-downloads',
    text: 'Downloads',
    href: '#resume-downloads'
  },
  {
    page: 'resume-skills',
    text: 'Skills',
    href: '#resume-skills'
  },
  {
    page: 'resume-roles',
    text: 'Roles',
    href: '#resume-roles'
  }
];

class Resume extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedSubNav: "resume-bio" };
    this.handleActionChange = this.handleActionChange.bind(this);
  }

  handleActionChange(updatedSelectedPage) {
    this.setState({selectedSubNav: updatedSelectedPage});
  }

  render() {

    var selection = this.state.selectedSubNav;
    var toRender = (selection === "resume-roles" ? <ResumeRoles/>:
      selection === "resume-downloads" ? <ResumeDownloads/> :
      selection === "resume-skills" ? <ResumeSkills/> :
      <ResumeContent/> );

    return (

      <div>
        <SubNav entries={subNavEntries} pageChanged={this.handleActionChange} selectedSubNav={this.state.selectedSubNav} />
        {toRender}
      </div>
    );
  }
}
export default Resume;
