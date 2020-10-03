import React from 'react';
import './index.css';

import CNavbar from '../CNavbar';
import Routes from '../Routes';

function App() {
  return (
    <>
      <CNavbar name="El Jardin de Mamá" bg="light" />
      <Routes />
    </>

  );
}

export default App;
