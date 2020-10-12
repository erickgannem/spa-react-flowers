import React from 'react';
import { Route, Switch } from 'wouter';

import Catalog from '../../pages/Catalog';
import SignIn from '../../pages/SignIn';
import Dashboard from '../../pages/Dashboard';
import ProtectedRoute from '../ProtectedRoute';
import IndividualArticle from '../../pages/IndividualArticle';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Catalog} />
      <Route path="/Panel" component={() => <ProtectedRoute component={Dashboard} />} />
      <Route path="/Ofertas" component={() => <div><h2>Pagina de Ofertas</h2></div>} />
      <Route path="/Macetas" component={() => <div><h2>Pagina de Macetas</h2></div>} />
      <Route path="/Accesorios" component={() => <div><h2>Pagina de Accesorios</h2></div>} />
      <Route path="/Herramientas" component={() => <div><h2>Pagina de Herramientas</h2></div>} />
      <Route path="/plantas/:name" component={(params) => <IndividualArticle {...params} />} />
      <Route path="/Entrar" component={SignIn} />
    </Switch>
  );
}

export default Routes;
