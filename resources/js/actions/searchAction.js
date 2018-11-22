import axios from 'axios'
import { history } from '../app'

const getRandomArrayValue = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

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
                let restaurant = response.data
                dispatch({type: "SEARCH_SUCCESS", restaurant})
                history.push('/home/map')
            })
    }
}

export const searchFromFavourites = (id) => {
    return (dispatch) => {
        console.log("Search from favourites")
        dispatch({type: "SEARCH_BEGIN"})
        let params = new FormData()
        let currenturl = window.location.hostname
        params.append('user', id)
        let url = `http://${currenturl}:80/database/user/getFavorites.php`
        axios.post(url, params)
            .then(response => {
                let favourites = response.data
                let randomValue = getRandomArrayValue(favourites.length)
                let restaurantFromFavourites = favourites[randomValue].R_ID
                let url = `http://${currenturl}:80/restaurant/restaurantdetails.php`
                let params = new FormData()
                params.append('id', restaurantFromFavourites)
                axios.post(url, params)
                    .then(response => {
                        let restaurant = response.data
                        dispatch({type: "SEARCH_SUCCESS", restaurant})
                        history.push('/home/map')
                    })
            })
    }
}

export const updateCurrentLocation = (currentLocation) => {
    return (dispatch) => {
        dispatch({type: "UPDATE_CURRENT_LOCATION", currentLocation})
    }
}