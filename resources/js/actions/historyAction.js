export const getUserHistory = (user) => {
    return(dispatch) => {
        dispatch({type: "FETCH_USER_HISTORY_BEGIN"})
        let params = new FormData()
        let currenturl = window.location.hostname
        params.append('user', user)
        let url = `http://${currenturl}:80/database/history/getHistory.php`
        axios.post(url, params)
            .then(response => {
                let userHistory = response.data
                dispatch({type:"FETCH_USER_HISTORY_SUCCESS", userHistory})
            })
    }
}

export const addUserHistory = (user, restaurant) => {
    let params = new FormData()
    let currenturl = window.location.hostname
    params.append('user', user)
    params.append('restaurant', restaurant)
    let url = `http://${currenturl}:80/database/history/addHistory.php`
    axios.post(url, params)
        .then(response => {
            console.log("Success!")
        })
    
}