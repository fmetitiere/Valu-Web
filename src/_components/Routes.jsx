import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { BottomMenu } from "../Layout";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
      <BottomMenu />
    </BrowserRouter>
  );
}

export default Routes;
