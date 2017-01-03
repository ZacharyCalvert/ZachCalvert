import React, { Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Polygon
} from "react-google-maps";
import _ from "lodash";

// Polygon drive range based on
// https://www.freemaptools.com/how-far-can-i-travel.htm

// Google Maps React Utility Docs:
// http://tomchentw.github.io/react-google-maps/

const CommuteMap = withGoogleMap(props => (
  <GoogleMap
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
  </GoogleMap>
));

class RecruiterCommute extends Component {

state = {
  };

  handleMapLoad = this.handleMapLoad.bind(this);

  handleMapLoad(map) {
    this._mapComponent = map;
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
            <CommuteMap
              containerElement={
                <div style={{ height: `400px` }} />
              }
              mapElement={
                <div style={{ height: `400px` }} />
              }
              onMapLoad={this.handleMapLoad}
            />
        </div>
      	</div>
      </div>
    );
  }
}

export default RecruiterCommute;
