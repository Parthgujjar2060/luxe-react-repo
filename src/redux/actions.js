// actions.js
export const loginSuccess = (userData, sessionToken) => ({
  type: 'LOGIN_SUCCESS',
  payload: { userData, sessionToken },
});

  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  