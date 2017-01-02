import React, { Component } from 'react';
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
    defaultZoom={10}
    defaultCenter={{ lat: 32.802642, lng: -97.194859 }}
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

class RecruiterCommute extends Component {

state = {
    markers: [{
      position: {
        lat: 32.802642,
        lng: -97.194859
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
          <p>
            Below is my commute range based on drive time in traffic.
          </p>
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

export default RecruiterCommute;
