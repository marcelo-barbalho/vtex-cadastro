import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./config/history";
import Home from "./views/home";
import Admin from "./views/admin";

const Routers: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routers;
