// authenticate.js
import luxeApi from "./api";


const loginUser = async (user) => {
    const loginUrl = '/v2/auth/login';
    
    try {
        const response = await luxeApi.post(loginUrl, user);
        return response?.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};


const signUpuser = async (user) => {
    const loginUrl = '/v2/auth/signup';
    
    try {
        const response = await luxeApi.post(loginUrl, user );
        return response?.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};


const carModels = async () => {
    const carModelsUrl = '/v2/cars';
    
    try {
        const response = await luxeApi.get(carModelsUrl);
        return response?.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}

export { loginUser, signUpuser, carModels };