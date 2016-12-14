import React, { Component } from 'react';
import './style/card.css';

class Card extends Component {

  render() {

    var title = this.props.title;
    var text = this.props.text;

    return (

      <div className="col-sm-4 col-xs-3 card">
        <h1>{title}</h1>
        <hr></hr>
        <p>
          {text}
        </p>
      </div>
    );
  }
}

export default Card;
