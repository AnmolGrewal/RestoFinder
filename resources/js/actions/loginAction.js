import { history } from '../app'
export const authenticateUser = (email, password) => {
    return (dispatch) => {
        let params = new FormData()
        let currenturl = window.location.hostname
        params.append('email', email)
        params.append('password', password)
        let url = `http://${currenturl}:80/database/user/login.php`
        axios.post(url, params)
            .then(response => {
                let userId = response.data[0].U_ID
                dispatch({type:"AUTHENTICATE_SUCCESS", loggedInAs: userId})
                history.push('/home')
            })
    }
}

export const logoutUser = () => {
    return(dispatch) => {
        dispatch({type:"LOGOUT_USER"})
        history.push('/')
    }
}