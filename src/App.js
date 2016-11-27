import React, { Component } from 'react';
import Nav from './Navbar';
import Home from './Home';
import Resume from './Resume';
import Recruiters from './Recruiters'
import Social from './Social'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedPage: "HOME" };
    this.handleActionChange = this.handleActionChange.bind(this);
  }

  handleActionChange(updatedSelectedPage) {
    this.setState({selectedPage: updatedSelectedPage});
  }

  render() {


    var selection = this.state.selectedPage;
    var toRender = (selection === "RESUME" ? <Resume/> :
      selection === "SOCIAL" ? <Social/> :
      selection === "RECRUITERS" ? <Recruiters/> :
      <Home/>);


    return (
      <div>
        <Nav pageChanged={this.handleActionChange} selectedPage={this.state.selectedPage} />

        <div className="container">
          {toRender}

          <hr/>
        </div>
          <footer className="text-center">
            <p>&copy; 2016 Zach Calvert</p>
            <p><a href="https://opensource.org/licenses/MIT">MIT License</a></p>
          </footer>
      </div>
    );
  }
}

export default App;
