import React from 'react';
import './index.css';

import CNavbar from '../CNavbar';
import Routes from '../Routes';
import AuthContext from '../../context/AuthContext';
import authReducer from '../../reducers/authReducer';

const INITIAL_AUTH_STATE = {
  user: {},
  token: '',
  isAuthenticated: false,
};

function grabAuthItems(authDispatch) {
  const token = localStorage.getItem('@jdm_user_token');
  const currentUser = JSON.parse(localStorage.getItem('@jdm_current_user'));

  if (token) {
    authDispatch({ type: 'SIGN_IN', payload: { user: currentUser, token } });
  }
}

function App() {
  const [authState, authDispatch] = React.useReducer(authReducer, INITIAL_AUTH_STATE);

  React.useEffect(() => {
    grabAuthItems(authDispatch);
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
