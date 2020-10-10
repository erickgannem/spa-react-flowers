export default function authReducer(state, action) {
  console.log('authreducer');
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: !!Object.keys(action.payload.user).length,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        user: {},
        token: '',
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
