import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./config/history";
import Home from "./views/home/home";
import Admin from "./views/admin/admin";
import List from "./views/admin/list";
import Header from "./components/header";
import Footer from "./components/footer";

const Routers: React.FC = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/list" component={List} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routers;
