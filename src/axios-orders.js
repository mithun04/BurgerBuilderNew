import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-472f5.firebaseio.com'
});

export default instance;