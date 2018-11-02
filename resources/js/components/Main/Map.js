import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import '../../../sass/map.css'

const GOOGLE_MAPS_API_KEY = "AIzaSyA-c9U296XcJk42WgQW3R2akfIg4LcQz_E"

const style = {
    width: '100%',
    height: '100%'
}

export class MapComponent extends Component {
    render(){
        return (
            <Map
                google={this.props.google}
                style={style}
                initialCenter={{lat: 49.2842954,lng: -123.1121362}}
                zoom={15}
            />
        )
    }
}

export default GoogleApiWrapper({
    apiKey: GOOGLE_MAPS_API_KEY
  })(MapComponent)