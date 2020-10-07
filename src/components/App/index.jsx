import React from 'react';
import './index.css';

import CNavbar from '../CNavbar';
import Routes from '../Routes';

import AuthContext from '../../context/AuthContext';
import FeedbackContext from '../../context/FeedbackContext';

import authReducer from '../../reducers/authReducer';
import feedbackReducer from '../../reducers/feedbackReducer';

import grabAuthItems from '../../actions/grabAuthItems';

const INITIAL_AUTH_STATE = {
  user: {},
  token: '',
  isAuthenticated: false,
};
const INITIAL_FEEDBACK_STATE = {
  isLoading: false,
  error: {},
};

function App() {
  const [authState, authDispatch] = React.useReducer(authReducer, INITIAL_AUTH_STATE);
  const [feedbackState, feedbackDispatch] = React.useReducer(
    feedbackReducer, INITIAL_FEEDBACK_STATE,
  );

  React.useEffect(() => {
    grabAuthItems(authDispatch);
  }, [authDispatch]);

  return (
    <>
      <AuthContext.Provider value={{ authState, authDispatch }}>
        <FeedbackContext.Provider value={{ feedbackState, feedbackDispatch }}>
          <CNavbar name="El Jardin de Mamá" bg="light" />
          <Routes />
        </FeedbackContext.Provider>

      </AuthContext.Provider>
    </>

  );
}

export default App;
