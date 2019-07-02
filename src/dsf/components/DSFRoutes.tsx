import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import DSFBackPlane from './DSFBackPlane';
import NetworkServices from '../views/NetworkServices';
import SmartGreenCapital from '../views/SmartGreenCapital';
import FAQ from '../views/FAQ';

export const DSFRoutes = () => {
  return (
    <React.Fragment>
    <CssBaseline />
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={DSFBackPlane} />
          <Route exact path="/services" component={NetworkServices} />
          <Route exact path="/smartgreencapital" component={SmartGreenCapital} />
          <Route exact path="/faq" component={FAQ} />
        </Switch>
      </div>
    </HashRouter>
    </React.Fragment>
  );
}