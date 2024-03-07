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

const getuserData = async (userId) => {
    const loginUrl = `/v2/auth/user/${userId}`;
  
    try {
      const response = await luxeApi.get(loginUrl);
      return response?.data;
    } catch (error) {
      console.error('Error during fetching user data:', error);
      throw error;
    }
  };


const sedanModel = async () => {
    const carModelsUrl = '/v2/sedan';
    
    try {
        const response = await luxeApi.get(carModelsUrl);
        return response?.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}

const hatchbackModel = async () => {
    const carModelsUrl = '/v2/hatchback';
    
    try {
        const response = await luxeApi.get(carModelsUrl);
        return response?.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}

const suvModel = async () => {
    const carModelsUrl = '/v2/suv';

    try{
        const response = await luxeApi.get(carModelsUrl);
        return response?.data;

    }
    catch(error){
        console.error('Error during login:', error);
        throw error;
    }
}

const sportModel = async () => {
    const carModelUrl = '/v2/sport';
    try {
        const repsonse = await luxeApi.get(carModelUrl);
        return repsonse?.data;
    }
    catch (error) {
        console.error('Error during login:', error);
        throw error;
    } 
}



export { loginUser, signUpuser, sedanModel, hatchbackModel, suvModel, sportModel, getuserData };