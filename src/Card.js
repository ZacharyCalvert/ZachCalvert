import React, { Component } from 'react';
import './style/card.css';

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = { opened: false };
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    var invertedOpened = !this.state.opened;
    this.setState({opened: invertedOpened});
  }

  emptyCard() {

    var title = this.props.title;
    return (
        <div className="card" onClick={this.clicked}>
          <h1>{title}</h1>
        </div>
      );
  }

  fullCard() {

    var title = this.props.title;
    var text = this.props.text;
    return (
        <div className="card" onClick={this.clicked}>
          <h1>{title}</h1>
          <hr></hr>
          <p>
            {text}
          </p>
        </div>
      );
  }

  getBootstrapWidthClasses() {
    var showFullCard = this.state.opened;
    if (showFullCard) {
      return "col-md-12 col-sm-12 col-xs-12 card-wrapper";
    } else {
      return "col-md-3 col-sm-4 col-xs-6 card-wrapper";
    }
  }


  render() {

    var showFullCard = this.state.opened;

    return (
      <div className={this.getBootstrapWidthClasses()}>
        {
          showFullCard ?
          this.fullCard()
          : 
          this.emptyCard()
        }
      </div>
    );
  }
}

export default Card;
