import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />

        <Route path='/map' component={OrphanagesMap} />

        <Route path='/orphanages/create' component={CreateOrphanage} />
        <Route path='/orphanages/:id' component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}
