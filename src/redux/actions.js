export const loginSuccess = ({ user, sessionToken }) => ({
  type: 'LOGIN_SUCCESS',
  payload: { user, sessionToken },
});
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  