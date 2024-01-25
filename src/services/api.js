import axios from 'axios';

const luxeApi = axios.create({

    baseURL: 'http://localhost:10000', 
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