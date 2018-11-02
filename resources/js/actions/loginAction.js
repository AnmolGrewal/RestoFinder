export const authenticateUser = (email, password) => {
    return (dispatch) => {
        let params = new FormData()
        let currenturl = window.location.hostname
        params.append('email', email)
        params.append('password', password)
        let url = `http://${currenturl}:80/database/user/login.php`
        axios.post(url, params)
            .then(response => {
                console.log(response)
                dispatch({type:"AUTHENTICATE_SUCCESS"})
            })
    }
}