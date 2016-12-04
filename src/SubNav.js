import React, { Component } from 'react';
import './style/subnav.css';

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
