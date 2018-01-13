import React, { Component } from 'react';
import './style/nav.css';

require('./style/nav.css');

class Nav extends Component {


  constructor(props) {
    super(props);
    this.updateSelection = this.updateSelection.bind(this);
  }

  updateSelection(selection) {
    this.props.pageChanged(selection);
  }

  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-custom">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" onClick={() => this.updateSelection('HOME')} href="#">Zach Calvert</a>
          </div>

          <div id="navbar" className="navbar-collapse collapse navbar-right">
            <ul className="nav navbar-nav">
              <li className={this.props.selectedPage === "HOME" ? 'active' : 'deactive'} onClick={() => this.updateSelection('HOME')} ><a href="#home">Home</a></li>
              <li className={this.props.selectedPage === "RESUME" ? 'active' : 'deactive'} onClick={() => this.updateSelection('RESUME')} ><a href="#resume">Resume</a></li>
              <li className={this.props.selectedPage === "RECRUITERS" ? 'active' : 'deactive'} onClick={() => this.updateSelection('RECRUITERS')} ><a href="#recruiters">Recruiters</a></li>
              </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
