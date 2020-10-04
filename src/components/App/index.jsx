import React from 'react';
import './index.css';

import CNavbar from '../CNavbar';
import Routes from '../Routes';
import AuthContext from '../../context/AuthContext';

function App() {
  return (
    <>
      <AuthContext.Provider value={{
        user: {},
        isAuthenticated: false,
      }}
      >
        <CNavbar name="El Jardin de Mamá" bg="light" />
        <Routes />
      </AuthContext.Provider>
    </>

  );
}

export default App;
