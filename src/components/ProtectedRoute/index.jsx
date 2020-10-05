import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'wouter';

function ProtectedRoute({ component: Component }) {
  const isAuthenticated = !!localStorage.getItem('@jdm_user_token');
  return (
    isAuthenticated ? (<Component />) : (<Redirect href="/entrar" />)
  );
}

ProtectedRoute.defaultProps = {
  component: <Redirect href="/entrar" />,
};

ProtectedRoute.propTypes = {
  component: PropTypes.func,
};

export default ProtectedRoute;
