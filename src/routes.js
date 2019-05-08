import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Bikes from "./components/Bikes/Bikes";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Bikes} path="/bikes" />
  </Switch>
);
