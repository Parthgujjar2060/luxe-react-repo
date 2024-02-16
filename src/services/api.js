import axios from 'axios';

const luxeApi = axios.create({

    baseURL: 'https://luxe-wheels-backend.onrender.com', 
}); 
 
luxeApi.interceptors.response.use((response) =>
{
    console.log("response : ", response);
    return response;

},
async (error) => {
    console.log("error : ", error);
    return Promise.reject(error);
}
);


export default luxeApi;