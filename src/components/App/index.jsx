import React from 'react';
import './index.css';

import CNavbar from '../CNavbar';
import Routes from '../Routes';
import AuthContext from '../../context/AuthContext';

const INITIAL_STATE = {
  user: {},
  token: '',
  isAuthenticated: false,
};
function authReducer(state, action) {
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

function App() {
  const [authState, authDispatch] = React.useReducer(authReducer, INITIAL_STATE);
  React.useEffect(() => {
    const token = localStorage.getItem('@jdm_user_token');
    const currentUser = localStorage.getItem('@jdm_current_user');

    if (token) {
      authDispatch({ type: 'SIGN_IN', payload: { user: JSON.parse(currentUser), token } });
    }
  }, []);
  return (
    <>
      <AuthContext.Provider value={{ authState, authDispatch }}>
        <CNavbar name="El Jardin de Mamá" bg="light" />
        <Routes />
      </AuthContext.Provider>
    </>

  );
}

export default App;
