// post request to make a new user //
const axios = require('axios');

var baseURL = 'https://mental-health-app-backend.herokuapp.com'

export const createUser = async function(fname, lastname, username, password, confirmpass) {
    if(password !== confirmpass) {return "passwords don't match";}
    const result = axios({
        method: 'post',
        url: `${baseURL}` + '/user',
        // withCredentials: true,
        data: {
            fname: fname,
            lastname: lastname,
            username: username,
            password: password
        }
    })
}
