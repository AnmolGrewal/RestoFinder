import axios from 'axios'
import { history } from '../app'

export const searchForRandomRestaurant = (currentLocation) => {
    return(dispatch) => {
        dispatch({type: "SEARCH_BEGIN"})
        let params = new FormData()
        let currenturl = window.location.hostname
        params.append('longitude', currentLocation.longitude)
        params.append('latitude', currentLocation.latitude)
        let url = `http://${currenturl}:80/restaurant/randomrestaurant.php`
        axios.post(url, params)
            .then(response => {
                console.log(response)
                let restaurant = response.data
                dispatch({type: "SEARCH_SUCCESS", restaurant})
                history.push('/home/map')
            })
    }
}

export const searchFromFavourites = () => {

}

export const updateCurrentLocation = (currentLocation) => {
    return (dispatch) => {
        dispatch({type: "UPDATE_CURRENT_LOCATION", currentLocation})
    }
}