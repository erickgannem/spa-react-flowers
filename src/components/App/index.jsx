import React from 'react';
import './index.css';

import Container from 'react-bootstrap/Container';

import Navbar from '../Navbar';
import Routes from '../Routes';

import AuthContext from '../../context/AuthContext';
import FeedbackContext from '../../context/FeedbackContext';
import ArticlesContext from '../../context/ArticlesContext';

import authReducer from '../../reducers/authReducer';
import feedbackReducer from '../../reducers/feedbackReducer';
import articlesReducer from '../../reducers/articlesReducer';

import grabAuthItems from '../../actions/grabAuthItems';
import fetchArticles from '../../actions/FetchArticles';

const INITIAL_AUTH_STATE = {
  user: {},
  token: '',
  isAuthenticated: false,
};
const INITIAL_FEEDBACK_STATE = {
  isLoading: false,
  error: { message: '' },
};
const INITIAL_ARTICLES_STATE = {
  articles: [],
};

function App() {
  const [authState, authDispatch] = React.useReducer(authReducer, INITIAL_AUTH_STATE);
  const [feedbackState, feedbackDispatch] = React.useReducer(
    feedbackReducer, INITIAL_FEEDBACK_STATE,
  );
  const [articlesState, articlesDispatch] = React.useReducer(
    articlesReducer, INITIAL_ARTICLES_STATE,
  );

  React.useEffect(() => {
    grabAuthItems(authDispatch);
    fetchArticles(feedbackDispatch, articlesDispatch);
  }, [authDispatch]);
  return (
    <>
      <AuthContext.Provider value={{ authState, authDispatch }}>
        <FeedbackContext.Provider value={{ feedbackState, feedbackDispatch }}>
          <ArticlesContext.Provider value={{ articlesState, articlesDispatch }}>
            <Navbar name="El Jardin de Mamá" />
            <Container className="justify-content-center align-items-center" style={{ paddingTop: 50, paddingBottom: 50 }}>
              <Routes />
            </Container>
          </ArticlesContext.Provider>
        </FeedbackContext.Provider>
      </AuthContext.Provider>
    </>

  );
}

export default App;
