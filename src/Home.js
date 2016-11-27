import React, { Component } from 'react';

class Home extends Component {

  render() {
    return (
    	<div className="row">

    		<div className="col-sm-6">
      			<p>Hello to home</p>
      		</div>

			<div className="col-sm-3 col-sm-offset-1 sidebar">
	          <div className="sidebar-module sidebar-module-inset">
	            <h4>About Me</h4>
	            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
	          </div>
	        </div>
        </div>

    );
  }
}

export default Home;