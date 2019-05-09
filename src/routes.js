import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Bikes from "./components/Bikes/Bikes";
import Men from "./components/Men/Men";
import Womens from "./components/Womens/Womens";
import Kids from "./components/Kids/Kids";
import Acessory from "./components/Acessory/Acessory";
import Sale from "./components/Sale/Sale";
import { connect } from "react-redux";
import Product from "./components/Product/Product";
export default (
	<Switch>
		<Route component={Home} exact path="/" />
		<Route component={Bikes} path="/bikes" />
		<Route component={Men} path="/men" />
		<Route component={Womens} path="/women" />
		<Route component={Kids} path="/kids" />
		<Route component={Acessory} path="/acessory" />
		<Route component={Sale} path="/sale" />
		<Route
			exact
			path="/Product/:id"
			component={connect(state => state)(props => {
				let {
					items,
					match: {
						params: { id }
					}
				} = props;
				if (items.length) {
					return (
						<Product product={items.find(c => +c.id === +id)} {...props} />
					);
				}
				// else {
				// 	return <CircularProgress />;
				// }
			})}
		/>
	</Switch>
);
