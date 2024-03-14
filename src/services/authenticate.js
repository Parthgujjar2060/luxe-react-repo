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

const getuserData = async (userId) => {
    const loginUrl = `/user`;
  
    try {
        console.log("userId : ", userId);
      const response = await luxeApi.post(loginUrl, { userId });
      return response?.data;
    } catch (error) {
      console.error('Error during fetching user data:', error);
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


const getQueriedCars = async ({carType}) => {
    const carModelsUrl = `/cars?q=${carType}`;
    
    try {
        const response = await luxeApi.get(carModelsUrl);
        return response?.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}
 


export { loginUser, signUpuser, getQueriedCars, getuserData };