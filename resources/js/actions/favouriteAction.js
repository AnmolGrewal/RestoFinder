export const getFavourites = (id) => {
    return(dispatch) => {
        dispatch({type: "FETCH_FAVOURITES_BEGIN"})
        let params = new FormData()
        let currenturl = window.location.hostname
        params.append('user', id)
        let url = `http://${currenturl}:80/database/user/getFavorites.php`
        axios.post(url, params)
            .then(response => {
                let favourites = response.data
                dispatch({type:"FETCH_FAVOURITES_SUCCESS", favourites})
            })
    }
}

export const addFavourites = (user, restaurant) => {
    let params = new FormData()
    let currenturl = window.location.hostname
    params.append('user', user)
    params.append('restaurant', restaurant)
    let url = `http://${currenturl}:80/database/user/addFavorite.php`
    axios.post(url, params)
        .then(response => {
            console.log("Success!")
        })
    
}

export const removeFavourites = (user, restaurant) => {
    let params = new FormData()
    let currenturl = window.location.hostname
    params.append('user', user)
    params.append('restaurant', restaurant)
    let url = `http://localhost:8000/database/user/rmFavorite.php`
    axios.post(url, params)
        .then(response => {
            console.log("Success!")
        })
    
}