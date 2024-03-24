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

const getuserData = async (sessionToken) => {
    const loginUrl = `/user`;
  
    try {
        console.log("sessionToken : ", sessionToken);
      const response = await luxeApi.post(loginUrl, sessionToken);
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


 


export { loginUser, signUpuser, getuserData };