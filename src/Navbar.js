import React, { Component } from 'react';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
// import logo from './logo.svg';


class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedPage: "HOME" };
  }

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
            <a className="navbar-brand" onClick={() => this.setState({selectedPage: 'HOME'})} href="#">Zach Calvert</a>
          </div>

          <div id="navbar" className="navbar-collapse collapse navbar-right">
            <ul className="nav navbar-nav">
              <li className={this.state.selectedPage === "HOME" ? 'active' : 'deactive'} onClick={() => this.setState({selectedPage: 'HOME'})} ><a href="#home">Home</a></li>
              <li className={this.state.selectedPage === "RESUME" ? 'active' : 'deactive'} onClick={() => this.setState({selectedPage: 'RESUME'})} ><a href="#resume">Resume</a></li>
              <li className={this.state.selectedPage === "SOCIAL" ? 'active' : 'deactive'} onClick={() => this.setState({selectedPage: 'SOCIAL'})} ><a href="#social">Social</a></li>
              <li className={this.state.selectedPage === "RECRUITERS" ? 'active' : 'deactive'} onClick={() => this.setState({selectedPage: 'RECRUITERS'})} ><a href="#recruiters">Recruiters</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
