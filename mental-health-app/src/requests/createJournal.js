const axios = require('axios');

var baseURL = 'https://mental-health-app-backend.herokuapp.com'

export const createJournal = async function(body) {
    const result = await axios({
        method: 'post',
        url: `${baseURL}` + '/journal',
        //withCredentials: true,
        
        data: {
            username: "lucyhill",
            body: body
        }
    })
    return result;
}