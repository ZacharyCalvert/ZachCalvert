import React, { Component } from 'react';
import AboutMe from './AboutMe';

class Resume extends Component {

  render() {
    return (
      
    	<div className="row">

    		<div className="col-sm-8">
    			Resume here
      		</div>

			<AboutMe/>
        </div>
    );
  }
}

export default Resume;