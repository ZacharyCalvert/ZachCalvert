import React, { Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Polygon,
  Marker
} from "react-google-maps";
import _ from "lodash";

// Polygon drive range based on
// https://www.freemaptools.com/how-far-can-i-travel.htm

// Google Maps React Utility Docs:
// http://tomchentw.github.io/react-google-maps/

const CommuteMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={10}
    defaultCenter={{ lat: 32.802642, lng: -97.194859 }}
  >

    <Polygon
        paths={
          [
            {lng:-97.23433, lat:32.61078},
            {lng:-97.27003, lat:32.62984},
            {lng:-97.30221, lat:32.65619},
            {lng:-97.30814, lat:32.6698},
            {lng:-97.32055, lat:32.67741},
            {lng:-97.3887, lat:32.71661},
            {lng:-97.33038, lat:32.7549},
            {lng:-97.39031, lat:32.82438},
            {lng:-97.36394, lat:32.86023},
            {lng:-97.33828, lat:32.90482},
            {lng:-97.31707, lat:32.89986},
            {lng:-97.0864, lat:32.92344},
            {lng:-97.08637, lat:32.92216},
            {lng:-97.08562, lat:32.92239},
            {lng:-97.016, lat:32.84115},
            {lng:-97.01787, lat:32.8369},
            {lng:-97.02899, lat:32.75937},
            {lng:-97.02908, lat:32.75234},
            {lng:-97.17742, lat:32.67592},
            {lng:-97.184, lat:32.6443}
            ]
          }
        draggable={false}
        editable={false}
        visible={true}
        options={{
          fillColor: `green`,
          fillOpacity: 0.25,
          strokeColor: `green`,
          strokeOpacity: 1,
          strokeWeight: 1,
        }}
      />

    <Polygon
        paths={
          [
            {lng:-97.32015, lat:32.60451},
            {lng:-97.41654, lat:32.65307},
            {lng:-97.43817, lat:32.68399},
            {lng:-97.33038, lat:32.7549},
            {lng:-97.48447, lat:32.73783},
            {lng:-97.4631, lat:32.78656},
            {lng:-97.46779, lat:32.82155},
            {lng:-97.47001, lat:32.82241},
            {lng:-97.4737, lat:32.82403},
            {lng:-97.41309, lat:32.92645},
            {lng:-97.40205, lat:32.95712},
            {lng:-97.39518, lat:32.95268},
            {lng:-97.39196, lat:32.9512},
            {lng:-97.30575, lat:32.98199},
            {lng:-97.30466, lat:32.98359},
            {lng:-97.03674, lat:32.96471},
            {lng:-97.03739, lat:32.96387},
            {lng:-97.03785, lat:32.96333},
            {lng:-96.96839, lat:32.89792},
            {lng:-96.93038, lat:32.83686},
            {lng:-96.94076, lat:32.76329},
            {lng:-96.9968, lat:32.74583},
            {lng:-97.02441, lat:32.68469},
            {lng:-97.10461, lat:32.67774},
            {lng:-97.13252, lat:32.58164}
            ]
          }
        draggable={false}
        editable={false}
        visible={true}
        options={{
          fillColor: `orange`,
          fillOpacity: 0.25,
          strokeColor: `orange`,
          strokeOpacity: 1,
          strokeWeight: 1,
        }}
      />
      {props.markers.map((marker, index) => (
        <Marker position={marker.position} key={index} />
      ))}
  </GoogleMap>
));

class RecruiterCommute extends Component {

state = {
  markers: []
  };

  handleMapLoad = this.handleMapLoad.bind(this);
  handleMarkersChanged = this.handleMarkersChanged.bind(this);

  handleMapLoad(reactMap) {

    /*
      Looks like there is an issue with using the SearchBox and Polygon.  I don't know the root cause and frankly
      don't have the NPM prowess of the 50 libraries in use in the react-google-maps script.  Instead, I've dug in and 
      reverse engineered some of the guts and discovered how to ge the low level map.  I'll go directly to google
      API and wire in the search box manually.  

      Ugly but functional - sometimes required, never fun.

      URLs tied together:
      http://tomchentw.github.io/react-google-maps/places/search-box
      https://developers.google.com/maps/documentation/javascript/examples/places-searchbox

    */
    this._map = reactMap;
    var inputDiv = document.getElementById('office-search');
    var google = window.google;
    var searchBox = new google.maps.places.SearchBox(inputDiv);
    searchBox.handleMarkersChanged = this.handleMarkersChanged;
    // cute naming convention guy.  Very professional.
    var map = reactMap.context["__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"];
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputDiv);

    searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length === 0) {
            return;
          }

          // For each place, get the icon, name and location.
          var bounds = map.getBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              return;
            }

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);

          // Add a marker for each place returned from search bar
          const markers = places.map(place => ({
            position: place.geometry.location,
          }));
          searchBox.handleMarkersChanged(markers);
        });
  }

  handleMarkersChanged(updatedMarkers) {
    this.setState({
      markers: updatedMarkers
    });
  }

  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <p>
              Below is the coverage of my maximum commute range.
            </p>
          </div>
        </div>
      	
      	<div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <input id="office-search" className="controls" type="text" placeholder="Office location search"/>
            <CommuteMap
              containerElement={
                <div style={{ height: `400px` }} />
              }
              mapElement={
                <div style={{ height: `400px` }} />
              }
              onMapLoad={this.handleMapLoad}
              markers={this.state.markers}
            />
        </div>
      	</div>
      </div>
    );
  }
}

export default RecruiterCommute;
