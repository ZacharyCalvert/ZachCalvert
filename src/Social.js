import React, { Component } from 'react';
import SubNav from './SubNav';

var subNavEntries = [
  {
    page: 'github',
    text: 'GitHub',
    href: '#social'
  },
  {
    page: 'linkedin',
    text: 'LinkedIn',
    href: '#social'
  },
  {
    page: 'twitter',
    text: 'Twitter',
    href: '#social'
  }
];

class Social extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedSubNav: "none" };
    this.handleActionChange = this.handleActionChange.bind(this);
  }

  handleActionChange(updatedSelectedPage) {
    if (updatedSelectedPage === 'twitter') {
    	window.open('https://twitter.com/zacharycalvert');
    } else if (updatedSelectedPage === 'linkedin') {
		window.open('https://www.linkedin.com/in/zachary-calvert');
    } else if (updatedSelectedPage === 'github') {
    	window.open('https://github.com/ZacharyCalvert');
    }
  }

  render() {

    return (

      <div>
        <SubNav entries={subNavEntries} pageChanged={this.handleActionChange} selectedSubNav={this.state.selectedSubNav} />
        <p>Pull from Twitter</p>
      </div>
    );
  }
}
export default Social;
