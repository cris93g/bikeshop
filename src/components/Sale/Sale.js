import React, { Component } from "react";
import { getBikes } from "../../redux/ducks/userReducer";
import axios from "axios";
import styled from "styled-components";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./Sale.css";
class Sale extends Component {
	componentDidMount() {
		this.props.getBikes();
	}
	goToProduct = id => {
		this.props.history.push("/product/" + id);
	};
	render() {
		console.log(this.props.userReducer);
		let { items } = this.props.userReducer;

		console.log(items);
		let saleItems = items
			.filter(item => item.id)
			.slice(-3)
			.map(i => {
				return (
					<div
						onClick={() => this.goToProduct(i.id)}
						key={i.id}
						className="img_card"
					>
						<div className="welp">
							<Cards>
								<p>{i.name}</p>
								<img src={i.picture} class="salePicture" />
								<p>{i.price}</p>
							</Cards>
						</div>
					</div>
				);
			});
		return <div>{saleItems}</div>;
	}
}
const mapStateToProps = state => state;

export default connect(
	mapStateToProps,
	{ getBikes }
)(Sale);

const Cards = styled.div`
	max-width: 200px;
	height: 280px;
	transition: 0.3s;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	cursor: pointer;
	&:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
`;
