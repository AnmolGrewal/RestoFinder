export const getFavourites = (email) => {
    return(dispatch) => {
        dispatch({type: "FETCH_FAVOURITES_BEGIN"})
        let params = new FormData()
        let currenturl = window.location.hostname
        params.append('user', email)
        let url = `http://localhost:8000/database/user/getFavourites.php`
        axios.post(url, params)
            .then(response => {
                console.log(response)
            })
    }
}