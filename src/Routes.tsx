import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Intro, NotFound } from './components/pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
