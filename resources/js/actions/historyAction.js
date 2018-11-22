export const getUserHistory = (user) => {
    return(dispatch) => {
        dispatch({type: "FETCH_USER_HISTORY_BEGIN"})
        let params = new FormData()
        let currenturl = window.location.hostname
        params.append('user', user)
        let url = `http://localhost:8000/database/history/getHistory.php`
        axios.post(url, params)
            .then(response => {
                console.log(response)
            })
    }
}