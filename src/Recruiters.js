import React, { Component } from 'react';
import AboutMe from './AboutMe';
import RecruiterQuestions from './RecruiterQuestions'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import _ from "lodash";
// TODO
// http://tomchentw.github.io/react-google-maps/

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
));

class Recruiters extends Component {

state = {
    markers: [{
      position: {
        lat: 25.0112183,
        lng: 121.52067570000001,
      },
      key: `Taiwan`,
      defaultAnimation: 2,
    }],
  };

  handleMapLoad = this.handleMapLoad.bind(this);
  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerRightClick = this.handleMarkerRightClick.bind(this);

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      },
    ];
    this.setState({
      markers: nextMarkers,
    });

    if (nextMarkers.length === 3) {
      this.props.toast(
        `Right click on the marker to remove it`,
        `Also check the code!`
      );
    }
  }

  handleMarkerRightClick(targetMarker) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers,
    });
  }

  render() {
    return (

      <div className="container">
	    	<div className="row">

	    		<div className="col-sm-8 col-xs-12">
	    			<p>
	    				If you are a recruiter looking for a Lead Java Engineer, I have put this page together with the intent of serving you.  Below are the most commonly asked recruiting questions that will help us filter to best fit opportunities.
	    			</p>
		      		<RecruiterQuestions/>
	      		</div>
				<AboutMe/>
	        </div>

      	<div className="row">
			<p></p>
      	</div>
      	<div className="row">
<GettingStartedGoogleMap
          containerElement={
            <div style={{ height: `400px` }} />
          }
          mapElement={
            <div style={{ height: `400px` }} />
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      	</div>
      </div>
    );
  }
}

export default Recruiters;