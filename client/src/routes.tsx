import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/landing';
import OrphanageMap from './pages/OrphanagesMap';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />

        <Route path='/map' component={OrphanageMap} />
      </Switch>
    </BrowserRouter>
  );
}
