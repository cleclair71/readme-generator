const axios = require('axios');

const api = {
    async getUser(username) {
        try { let response = await axios.get(`https://api.github.com/users/${username}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }   
    }
};
