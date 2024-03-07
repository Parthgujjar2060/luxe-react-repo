
export const loginSuccess = (userData, token) => ({
    type: 'LOGIN_SUCCESS',
    payload: {
         userId : userData.userId, 
         sessionToken: token,
         },
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  