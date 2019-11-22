import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";

import { Menu, MenuDesktop } from "../Layout";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";

import HomeDesktop from "./HomeDesktop";

function Routes() {
  return (
    <>
      <MobileView>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
          <Menu />
        </BrowserRouter>
      </MobileView>

      <BrowserView>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomeDesktop} />
          </Switch>
          <MenuDesktop />
        </BrowserRouter>
      </BrowserView>
    </>
  );
}

export default Routes;
