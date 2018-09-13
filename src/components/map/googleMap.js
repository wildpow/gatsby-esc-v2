import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import mapStyles from './mapStyles.json';
import { MapInfo } from '../../styles/landingStyles';

const defaultMapOptions = {
  styles: mapStyles
};
class GoogleMapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
      width: '100%',
      height: '200px',
      position: 'relative',
      display: 'flex',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }
    const containerStyle={position: 'relative'}
    return (
      <Map
        fullscreenControl={false}
        containerStyle={containerStyle}
        defaultOptions={defaultMapOptions}
        styles = {mapStyles}
        xs={ 12 }
        style={style}
        google = { this.props.google }
        onClick={this.onMapClick }
        zoom={ 16.6 }
        initialCenter={{ lat: 47.90504, lng: -122.242032 }}
      >
        <Marker
          // options={{icon: Logo, size: '1', scaledSize: '1'}}
          animation={ this.props.google.maps.Animation.DROP}
          onClick={ this.onMarkerClick }
          title={ 'E.S.C Mattress Center' }
          position={{ lat: 47.90524, lng: -122.241332 }}
          name={ 'E.S.C Mattress Center' }
        />
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        ><MapInfo>
        <h3>ESC Mattress Center</h3>
        <a href="tel:1-425-512-0017">
            (425)-512-0017
          </a>
        <a href="https://goo.gl/maps/B21aHALHux82">
          Navigate to our store
        </a>
          </MapInfo>
        </InfoWindow>
      </Map>

    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyD0mkvjqWR2YJNyjY7erwkABQfC4YcEW98')
})(GoogleMapContainer)