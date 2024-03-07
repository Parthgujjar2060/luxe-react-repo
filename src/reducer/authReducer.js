
const initialState = {
    userId: null,
    sessionToken: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          userId: action.payload.userId,
          sessionToken: action.payload.sessionToken,
        }; 
      case 'LOGOUT':
        return initialState;
      default:
        return state;
    }
  };
  
  export default authReducer;
  