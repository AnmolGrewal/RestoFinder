import axios from 'axios'
import { history } from '../app'

const getRandomArrayValue = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

export const searchForRandomRestaurant = (id, currentLocation) => {
    return(dispatch) => {
        dispatch({type: "SEARCH_BEGIN"})
        let params = new FormData()
        let currenturl = window.location.hostname
        params.append('user', id)
        let url = `http://${currenturl}:80/database/user/getPref.php`
        axios.post(url, params)
            .then(preference => {
                if(preference.data[0].U_DISTANCE){
                    var distance = preference.data[0].U_DISTANCE
                }
                if(preference.data[0].U_CATEGORIES){
                    var categories = preference.data[0].U_CATEGORIES
                }
                let paramsRandom = new FormData()
                paramsRandom.append('longitude', currentLocation.longitude)
                paramsRandom.append('latitude', currentLocation.latitude)
                paramsRandom.append('radius', distance*1000)
                paramsRandom.append('categories', categories)
                let url = `http://${currenturl}:80/restaurant/randomrestaurant.php`
                axios.post(url, paramsRandom)
                    .then(response => {
                        let restaurant = response.data
                        dispatch({type: "SEARCH_SUCCESS", restaurant})
                        history.push('/home/map')
                    })

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