import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/index";
import Favorites from "../pages/Favorites/Favorites";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/favorites" component={Favorites} />
    </Switch>
  );
}
