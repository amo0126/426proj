
const axios = require('axios');

var baseURL = 'https://mental-health-app-backend.herokuapp.com'

export const login = async function(username, password) {
    
    const result = await axios({
        method: 'post',
        url: `${baseURL}` + '/login',
        // withCredentials: true,
        
        data: {
            username: username,
            password: password
        }
    })
    return result;
}