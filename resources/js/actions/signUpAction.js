import axios from "axios";

export const registerUser = (firstName, lastName, gender, email, password) => {
    return (dispatch) => {
        let params = new FormData()
        let currenturl = window.location.hostname
        params.append('first_name', firstName)
        params.append('last_name', lastName)
        params.append('email', email)
        params.append('gender', gender)
        params.append('password', password)
        let url = `http://${currenturl}:80/database/user/createUser.php`
        axios.post(url, params)
            .then(response => console.log(response))
    
    }
}