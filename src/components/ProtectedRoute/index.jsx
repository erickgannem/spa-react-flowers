import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'wouter';

import checkAuthentication from '../../services/checkAuthentication';

function ProtectedRoute({ component: Component }) {
  const isAuthenticated = checkAuthentication();
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
