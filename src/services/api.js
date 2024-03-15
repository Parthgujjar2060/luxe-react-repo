import axios from 'axios';

const luxeApi = axios.create({


    // baseURL: 'https://luxe-wheels-backend.onrender.com', 

    baseURL: 'https://luxe-wheels-backend.onrender.com',

    // baseURL: 'http://10.0.0.75:10000',
    baseURL: 'http://localhost:10000',
    // baseURL: 'http://172.27.205.234:10000',
});

luxeApi.interceptors.response.use((response) => {

    return response;

},
    async (error) => {
        console.log("error : ", error);
        return Promise.reject(error);
    });

export default luxeApi; 