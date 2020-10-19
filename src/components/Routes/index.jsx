import React from 'react';
import { Route, Switch } from 'wouter';

import Catalog from '../../pages/Catalog';
import SignIn from '../../pages/SignIn';
import About from '../../pages/About';
import Contact from '../../pages/Contact';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Catalog} />
      <Route path="/Catalogo" component={Catalog} />
      {/* <Route path="/Macetas" component={() => <div><h2>Pagina de Macetas</h2></div>} />
      <Route path="/Accesorios" component={() => <div><h2>Pagina de Accesorios</h2></div>} /> */}
      <Route path="/Acerca" component={About} />
      <Route path="/Contactanos" component={Contact} />
      <Route path="/Entrar" component={SignIn} />
      <Route>404 - Not Found</Route>
    </Switch>
  );
}

export default Routes;
