import React, { Component } from 'react';
import _ from 'underscore';
import Nav from './Navbar';
import Home from './Home';
import Resume from './Resume';
import Recruiters from './Recruiters'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedPage: "HOME" };
    try {
      // TODO this should be shoved into the nav component, but it means the nav component needs to be smarter and removed hard coded
      // list.  This can be done better.
      var locationArr = window.location.href.split('#');
      if (locationArr.length === 2) {
        // we know we have a default location
        var targetPage = locationArr[1].split('+')[0].toUpperCase(); // the + selection is the separator for the subnav
        console.info("Target page %s", targetPage);
        // home, resume, recruiters
        // TODO SO UGLY AND WRONG.  I need a shower just letting this stick around.
        var renderOptions = ['HOME', 'RESUME', 'RECRUITERS'];
        if (_.contains(renderOptions, targetPage)) {
          this.state = { selectedPage: targetPage };
        } else {
          console.info("Don't support current target page of %s", targetPage);
        }
      } else {
        console.info("No target page, starting with home");
      }
    } catch (err) {
      console.info("error processing window location for page load, will use default");
      console.error(err);
    }
    this.handleActionChange = this.handleActionChange.bind(this);
  }

  handleActionChange(updatedSelectedPage) {
    this.setState({selectedPage: updatedSelectedPage});
  }

  render() {


    var selection = this.state.selectedPage;
    var toRender = (selection === "RESUME" ? <Resume/> :
      selection === "RECRUITERS" ? <Recruiters/> :
      <Home/>);


    return (
      <div>
        <Nav pageChanged={this.handleActionChange} selectedPage={this.state.selectedPage} />
          {toRender}
        
          <hr/>
          <footer className="text-center">
            <p>&copy; 2018 Zach Calvert</p>
            <p><a href="https://opensource.org/licenses/MIT">MIT License</a>.  Credit for Creative Commons favicon <a href="https://commons.wikimedia.org/w/index.php?curid=1453293">here</a></p>
          </footer>
      </div>
    );
  }
}

export default App;
