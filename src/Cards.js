import React, { Component } from 'react';
import Card from './Card';
import AboutMe from './AboutMe';
import './style/resume.css';
import './style/card.css';


class Cards extends Component {

  render() {

    return (

    	<div className="container">
      		<div className="row">
      			<div className="col-sm-8 col-xs-12 cards">
					{this.props.cards.map(function(object, i) {
	            		var title = object.title;
	            		var text = object.text;
                  var type = object.type;
                  var name = object.name;
                  var company = object.company;
                  var linkedIn = object.linkedIn;

	            		return <Card key={i} type={type} name={name} company={company} linkedIn={linkedIn} title={title} text={text} />
	          		})}
          		</div>
      			
        			
				<AboutMe/>
      		</div>
      	</div>		
    );
  }
}
export default Cards;
