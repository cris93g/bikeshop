import React, { Component } from "react";
import { getBikes } from "../../redux/ducks/userReducer";
import axios from "axios";
import styled from "styled-components";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./Sale.css";
import { Link } from "react-router-dom";
class Sale extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getBikes();
	}

	render() {
		console.log(this.props);
		let { items } = this.props.userReducer;

		console.log(items);
		let saleItems = items
			.filter(item => item.id)
			.slice(-3)
			.map(i => {
				return (
					<div className="welp" key={i.id}>
						<Link to={`product/${i.id}`}>
							<Cards>
								<p>{i.name}</p>
								<img src={i.picture} class="salePicture" />
								<p>{i.price}</p>
							</Cards>
						</Link>
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
