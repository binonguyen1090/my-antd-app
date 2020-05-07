import React from "react";
import {Route, IndexRedirect} from "react-router";
import App from "../App";
import {
    MenuAList
} from '../MenuAList';
import PageNotFound from '../PageNotFound'
const routes = (getState) => (
  <Route path="/" component={App}>
    <IndexRedirect to={'menuA'} />
    <Route path="menuA" component={App} />
    <Route path="*" component={PageNotFound} />
  </Route>
);
export default routes;
