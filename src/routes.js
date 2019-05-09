import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Bikes from "./components/Bikes/Bikes";
import Men from "./components/Men/Men";
import Womens from "./components/Womens/Womens";
import Kids from "./components/Kids/Kids";
import Acessory from "./components/Acessory/Acessory";
import Sale from "./components/Sale/Sale";

export default (
	<Switch>
		<Route component={Home} exact path="/" />
		<Route component={Bikes} path="/bikes" />
		<Route component={Men} path="/men" />
		<Route component={Womens} path="/women" />
		<Route component={Kids} path="/kids" />
		<Route component={Acessory} path="/acessory" />
		<Route component={Sale} path="/sale" />
	</Switch>
);
