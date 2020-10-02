import React from 'react';
import './index.css';

import CNavbar from '../CNavbar';
import MainPage from '../../pages/MainPage';

function App() {
  return (
    <>
      <CNavbar name="El Jardin de Mamá" bg="light" />
      <MainPage />
    </>

  );
}

export default App;
