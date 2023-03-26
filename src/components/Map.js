import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 34.738099,
      lng: 10.753445
    },
    zoom: 17
  };
 
  render() {
    return (
    //   Important! Always set the container height explicitly
      <div style={{ height: '60vh', width: '60vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCNurm5HsMkBPxsm9BReRh0oou1HQF4ahU" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={34.7358588002108}
            lng={10.746067047746063}
            text="hotel donia" 
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Maps;