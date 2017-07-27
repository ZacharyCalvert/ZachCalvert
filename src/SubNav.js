import React, { Component } from 'react';
import './style/subnav.css';

class SubNav extends Component {

/*
props:
  selectedSubNav: entry,
  pageChanged: function to notify on updated,
  prefix: page prefix for href,
  entries: [{
    page: x,
    text: display text
  }..]
*/

  constructor(props) {
    super(props);
    this.updateSelection = this.updateSelection.bind(this);
  }

  componentWillMount() {
    try {
      var locationArr = window.location.href.split('#');
      if (locationArr.length === 2) {
        // we know we have a default location
        var targetPageArr = locationArr[1].split('+'); // the + selection is the separator for the subnav

        if (targetPageArr.length === 2) {
          var subPage = targetPageArr[1];
          console.info("Sub page is %s", subPage);
          // 2 things to test
          // 1) is it a valid selection?
          // 2) is it already selected (don't re-select)

          if (subPage === this.props.selectedSubNav) {
            return;  // already active, nothing needed to do
          }

          var found = false;
          var entryIndex = 0;

          for(entryIndex = 0; entryIndex < this.props.entries.length; entryIndex++) {
            if (subPage === this.props.entries[entryIndex].page) {
              found = true;
              break;
            }
          }
          if (found) {
            this.updateSelection(subPage);
          }
        } else {
          console.info("No selected subpage, starting with subpage " + this.props.selectedSubNav);  
        }
      } else {
        console.info("No target page, starting with subpage " + this.props.selectedSubNav);
      }
    } catch (err) {
      console.info("error processing window location for page load, will use default");
      console.error(err);
    }
  }

  updateSelection(selection) {
    this.props.pageChanged(selection);
  }

  render() {

    var activePage = this.props.selectedSubNav;
    var pageUpdate = this.props.pageChanged;
    var pagePrefix = '#' + this.props.prefix + '+';

    return (

      <div className="container-fluid sub-nav">
        <ul id="sub-nav" className="sub-nav">
          {this.props.entries.map(function(object, i) {
            var clickedPage = object.page;
            return <li key={i} className={activePage === object.page ? 'active' : 'deactive'} onClick={() => pageUpdate(clickedPage)} ><a href={pagePrefix + object.page}>{object.text}</a></li>
          })}
            
        </ul>
      </div>
    );
  }
}

export default SubNav;
