import React, { Component } from 'react';
import './subnav.css';

class SubNav extends Component {

/*
props:
  selectedSubNav: entry,
  pageChanged: function to notify on updated
  entries: [{
    page: x,
    text: display text
    href: link
  }..]

  <div id="navbar" className="navbar-collapse collapse navbar-right">
            <ul className="nav navbar-nav">
              <li className={this.props.selectedPage === "HOME" ? 'active' : 'deactive'} onClick={() => this.updateSelection('HOME')} ><a href="#home">Home</a></li>
              <li className={this.props.selectedPage === "RESUME" ? 'active' : 'deactive'} onClick={() => this.updateSelection('RESUME')} ><a href="#resume">Resume</a></li>
              <li className={this.props.selectedPage === "SOCIAL" ? 'active' : 'deactive'} onClick={() => this.updateSelection('SOCIAL')} ><a href="#social">Social</a></li>
              <li className={this.props.selectedPage === "RECRUITERS" ? 'active' : 'deactive'} onClick={() => this.updateSelection('RECRUITERS')} ><a href="#recruiters">Recruiters</a></li>
            </ul>
          </div>
*/

  constructor(props) {
    super(props);
    this.updateSelection = this.updateSelection.bind(this);
  }

  updateSelection(selection) {
    this.props.pageChanged(selection);
  }

  render() {

    var activePage = this.props.selectedSubNav;
    var pageUpdate = this.props.pageChanged;

    return (

      <div className="container-fluid sub-nav">
        <ul id="sub-nav" className="sub-nav">
          {this.props.entries.map(function(object, i) {
            var clickedPage = object.page;
            return <li key={i} className={activePage === object.page ? 'active' : 'deactive'} onClick={() => pageUpdate(clickedPage)} ><a href={object.href}>{object.text}</a></li>
          })}
            
        </ul>
      </div>
    );
  }
}

export default SubNav;
