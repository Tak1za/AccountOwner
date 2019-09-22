import axios from 'axios';

const Instance = axios.create({
    baseURL: 'http:localhost:5000',
    headers: {
        headerType: 'example header type'
    }
});

export default Instance;