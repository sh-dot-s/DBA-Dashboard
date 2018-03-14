import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Base from '../components/Base';
import PageNotFound from '../components/NotFound';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Base} exact={true} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
