import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { connect } from 'react-redux'
import { toggleMoreInfo } from '../../actions/mainAction'

const GOOGLE_MAPS_API_KEY = "AIzaSyA-c9U296XcJk42WgQW3R2akfIg4LcQz_E"

const style = {
    width: '100%',
    height: '100%',
}

export class MapComponent extends Component {
    constructor(){
        super()
        this.onClick = this.onClick.bind(this)
    }
    componentDidMount(){
        this.props.toggleMoreInfo()
    }

    onClick(){
        this.props.toggleMoreInfo()
    }

    render(){
        var { restaurant, searchLoading, currentLocation } = this.props
        let lat = currentLocation.latitude
        let lng = currentLocation.longitude
        let currentPosition = {lat: lat, lng: lng}
        let restaurantName = restaurant.name
        let restaurantPos = {lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}
        return (
            <Map google={this.props.google} style={style} initialCenter={currentPosition} zoom={12}>
                <Marker onClick={this.onClick} title={restaurantName} position={restaurantPos}/>
            </Map>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        restaurant : state.search.restaurantsNearby,
        searchLoading: state.search.searchLoading,
        currentLocation: state.search.currentLocation
    }   
}

export default connect(mapStateToProps, { toggleMoreInfo })(GoogleApiWrapper({
    apiKey: GOOGLE_MAPS_API_KEY
  })(MapComponent))