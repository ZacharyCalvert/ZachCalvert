import React, { Component } from 'react';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
// import logo from './logo.svg';


class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Zach Calvert</a>
          </div>

          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><a href="#">Resume</a></li>
              <li><a href="#">Social</a></li>
              <li className="active"><a href="#">Recruiters</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
