// authenticate.js
import luxeApi from "./api";

const loginUser = async (email, password) => {
    const loginUrl = 'v1/auth/login';
    
    try {
        const response = await luxeApi.post(loginUrl, { email, password });
        return response?.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export { loginUser };