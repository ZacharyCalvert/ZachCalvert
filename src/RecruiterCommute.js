import React, { Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Polygon,
  Marker
} from "react-google-maps";
import _ from "lodash";
import inside from "point-inside-polygon";

// Polygon drive range based on
// https://www.freemaptools.com/how-far-can-i-travel.htm

// Google Maps React Utility Docs:
// http://tomchentw.github.io/react-google-maps/

// Draw tool for configuring polygon
// https://www.keene.edu/campus/maps/tool/


const InnerCommutePolygon = [
  {lng:-97.2602355, lat:32.9186671},
  {lng:-97.2804809, lat:32.8966374},
  {lng:-97.2849548, lat:32.8690829},
  {lng:-97.2877014, lat:32.8483185},
  {lng:-97.2849548, lat:32.8269722},
  {lng:-97.2732818, lat:32.7935001},
  {lng:-97.2540557, lat:32.7773366},
  {lng:-97.22247, lat:32.7704085},
  {lng:-97.1689117, lat:32.7750273},
  {lng:-97.1304595, lat:32.8015807},
  {lng:-97.1270263, lat:32.8419728},
  {lng:-97.1462524, lat:32.8898425},
  {lng:-97.1771514, lat:32.9134794},
  {lng:-97.2602355, lat:32.9186671},
  {lng:-97.2602355, lat:32.9186671}
];

const FlatInnerCommutePolygon = InnerCommutePolygon.map(function(lngLat) {return [lngLat.lng, lngLat.lat];});

const OuterCommutePolygon = [
  {lng:-97.2014737, lat:32.9548131},
  {lng:-97.2228241, lat:32.9574013},
  {lng:-97.2447968, lat:32.9533681},
  {lng:-97.2743225, lat:32.9476062},
  {lng:-97.3086548, lat:32.9395389},
  {lng:-97.3340607, lat:32.9205202},
  {lng:-97.3436737, lat:32.9032268},
  {lng:-97.3505402, lat:32.8651696},
  {lng:-97.3402405, lat:32.8322889},
  {lng:-97.3347473, lat:32.7982417},
  {lng:-97.3107147, lat:32.7670683},
  {lng:-97.2736359, lat:32.7347289},
  {lng:-97.2475433, lat:32.7237539},
  {lng:-97.1946716, lat:32.7185548},
  {lng:-97.1047211, lat:32.7162440},
  {lng:-97.0271301, lat:32.7353065},
  {lng:-96.9612122, lat:32.7618717},
  {lng:-96.9433594, lat:32.7745740},
  {lng:-96.9069350, lat:32.7926162},
  {lng:-96.9213545, lat:32.8272426},
  {lng:-96.9550002, lat:32.8699299},
  {lng:-96.9762862, lat:32.8831934},
  {lng:-97.0525038, lat:32.9241248},
  {lng:-97.0971036, lat:32.9375265},
  {lng:-97.1520352, lat:32.9467464},
  {lng:-97.2014737, lat:32.9548131}
];
const FlatOuterCommutePolygon = OuterCommutePolygon.map(function(lngLat) {return [lngLat.lng, lngLat.lat];});


const CommuteMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={10}
    defaultCenter={{ lat: 32.802642, lng: -97.194859 }}
  >

    <Polygon
        paths={
          InnerCommutePolygon
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
          OuterCommutePolygon
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
        <Marker position={marker.position} key={index} options={marker.options}/>
      ))}
  </GoogleMap>
));

class RecruiterCommute extends Component {

state = {
  markers: []
  };

  handleMapLoad = this.handleMapLoad.bind(this);
  handleMarkersChanged = this.handleMarkersChanged.bind(this);
  getMarkerIcon = this.getMarkerIcon.bind(this);

  handleMapLoad(reactMap) {

    if (!reactMap) {
      return;
    }

    /*
      Looks like there is an issue with using the SearchBox and Polygon.  I don't know the root cause and frankly
      don't have the NPM prowess of the 50 libraries in use in the react-google-maps script.  Instead, I've dug in and 
      reverse engineered some of the guts and discovered how to get the low level map.  I'll go directly to google
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
    searchBox.getMarkerIcon = this.getMarkerIcon;
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

            if (place.geometry.location) {
              bounds.extend(place.geometry.location);
            }
          });
          map.panToBounds(bounds);

          // Add a marker for each place returned from search bar
          const markers = places.map(place => ({
            position: place.geometry.location,
            options:{icon: searchBox.getMarkerIcon(place.geometry.location)}
          }));
          searchBox.handleMarkersChanged(markers);
        });
  }

  getMarkerIcon(location) {
    var point = [location.lng(), location.lat()];
    if (inside(point, FlatInnerCommutePolygon)) {
      return "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
    }
    if (inside(point, FlatOuterCommutePolygon)) {
      return "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
    }
    return "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
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
              Below is the coverage of my maximum commute range.  You may search for the office location in the google search box.
              Office locations that are within my commute range will show up as green for nearby, yellow for extended commute, and red for 
              out of my commute range.  
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
