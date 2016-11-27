import React, { Component } from 'react';
import Nav from './Navbar';
import Home from './Home';
import Resume from './Resume';
import Recruiters from './Recruiters'


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
    return (
      <div>
        <Nav pageChanged={this.handleActionChange} selectedPage={this.state.selectedPage} />

        <div className="container">
          <Home/>

          <hr/>
          <footer className="text-center">
            <p>&copy; 2016 Zach Calvert</p>
            <p><a href="https://opensource.org/licenses/MIT">MIT License</a></p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
