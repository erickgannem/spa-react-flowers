import React from 'react';
import { Route, Switch } from 'wouter';

import Catalog from '../../pages/Catalog';
import SignIn from '../../pages/SignIn';
import About from '../../pages/About';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Catalog} />
      <Route path="/Ofertas" component={() => <div><h2>Pagina de Ofertas</h2></div>} />
      <Route path="/Macetas" component={() => <div><h2>Pagina de Macetas</h2></div>} />
      <Route path="/Accesorios" component={() => <div><h2>Pagina de Accesorios</h2></div>} />
      <Route path="/Herramientas" component={() => <div><h2>Pagina de Herramientas</h2></div>} />
      <Route path="/Entrar" component={SignIn} />
      <Route path="/Acerca" component={About} />
    </Switch>
  );
}

export default Routes;
