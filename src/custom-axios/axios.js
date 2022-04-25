import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://lab2emtbackend.herokuapp.com/api',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

export default instance;