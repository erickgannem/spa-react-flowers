import React from 'react';
import { Route, Switch } from 'wouter';

import MainPage from '../../pages/MainPage';
import LoginPage from '../../pages/LoginPage';

function Routes() {
  return (
    <Switch>
      <Route default path="/" component={MainPage} />
      <Route path="/ofertas" component={() => <div><h2>ofertas</h2></div>} />
      <Route path="/macetas" component={() => <div><h2>macetas</h2></div>} />
      <Route path="/accesorios" component={() => <div><h2>accesorios</h2></div>} />
      <Route path="/herramientas" component={() => <div><h2>herramientas</h2></div>} />
      <Route path="/entrar" component={LoginPage} />
    </Switch>
  );
}

export default Routes;
