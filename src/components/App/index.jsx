import React from 'react';
import './index.css';

import Container from 'react-bootstrap/Container';

import Navbar from '../Navbar';
import Routes from '../Routes';

import AuthContext from '../../context/AuthContext';
import LoadingContext from '../../context/LoadingContext';
import ArticlesContext from '../../context/ArticlesContext';
import ErrorContext from '../../context/ErrorContext';
import SelectedArticleContext from '../../context/SelectedArticleContext';
import ModalContext from '../../context/ModalContext';

import authReducer from '../../reducers/authReducer';
import loadingReducer from '../../reducers/loadingReducer';
import articlesReducer from '../../reducers/articlesReducer';
import errorReducer from '../../reducers/errorReducer';
import selectedArticleReducer from '../../reducers/selectedArticleReducer';

import grabAuthItems from '../../actions/grabAuthItems';
import fetchArticles from '../../actions/FetchArticles';

const INITIAL_AUTH_STATE = {
  user: {},
  token: '',
  isAuthenticated: false,
};
const INITIAL_LOADING_STATE = {
  isLoading: false,
};
const INITIAL_ARTICLES_STATE = {
  articles: [],
};
const INITIAL_ERROR_STATE = {
  error: { message: '' },
};
const INITIAL_SELECTED_ARTICLE_STATE = {
  name: '',
  description: '',
  price: '',
  image: '',
  available: '',
};

function App() {
  const [authState, authDispatch] = React.useReducer(authReducer, INITIAL_AUTH_STATE);
  const [loadingState, loadingDispatch] = React.useReducer(
    loadingReducer, INITIAL_LOADING_STATE,
  );
  const [articlesState, articlesDispatch] = React.useReducer(
    articlesReducer, INITIAL_ARTICLES_STATE,
  );
  const [errorState, errorDispatch] = React.useReducer(
    errorReducer, INITIAL_ERROR_STATE,
  );
  const [selectedArticleState, selectedArticleDispatch] = React.useReducer(selectedArticleReducer,
    INITIAL_SELECTED_ARTICLE_STATE);

  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    grabAuthItems(authDispatch);
    fetchArticles(loadingDispatch, errorDispatch, articlesDispatch);
  }, [authDispatch, loadingDispatch, errorDispatch, articlesDispatch]);
  return (
    <>
      <AuthContext.Provider value={{ authState, authDispatch }}>
        <LoadingContext.Provider value={{ loadingState, loadingDispatch }}>
          <ArticlesContext.Provider value={{ articlesState, articlesDispatch }}>
            <ErrorContext.Provider value={{ errorState, errorDispatch }}>
              <SelectedArticleContext.Provider
                value={{ selectedArticleState, selectedArticleDispatch }}
              >
                <ModalContext.Provider value={{ showModal, setShowModal }}>
                  <Navbar name="El Jardin de Mamá" />
                  <Container className="justify-content-center align-items-center" style={{ paddingTop: 50, paddingBottom: 50 }}>
                    <Routes />
                  </Container>
                </ModalContext.Provider>

              </SelectedArticleContext.Provider>
            </ErrorContext.Provider>
          </ArticlesContext.Provider>
        </LoadingContext.Provider>
      </AuthContext.Provider>
    </>

  );
}

export default App;
