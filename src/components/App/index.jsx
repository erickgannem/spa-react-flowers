import React from 'react';
import './index.css';

import Container from 'react-bootstrap/Container';

import Navbar from '../Navbar';
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
  error: { message: '' },
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
          <Navbar name="El Jardin de Mamá" />
          <Container className="justify-content-center align-items-center" style={{ paddingTop: 50, paddingBottom: 50 }}>
            <Routes />
          </Container>
        </FeedbackContext.Provider>
      </AuthContext.Provider>
    </>

  );
}

export default App;
