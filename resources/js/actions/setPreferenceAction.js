import { history } from '../app'

export const setPreference = (userid, distance, categories) => {
    let params = new FormData()
    let currenturl = window.location.hostname
    params.append('user', userid)
    params.append('distance', distance)
    params.append('categories', categories)
    let url = `http://${currenturl}:80/database/user/chPref.php`
    axios.post(url, params)
        .then(response => {
            console.log("Success!")
            history.push('/home/settings')
        })
    
}
