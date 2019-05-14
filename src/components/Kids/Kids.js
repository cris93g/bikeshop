import React, { Component } from "react";
import styled from "styled-components";
import { getKidsBikes } from "../../redux/ducks/userReducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Kids extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getKidsBikes();
	}
	render() {
		const { items } = this.props.userReducer;
		console.log(this.props.userReducer);
		let displayItems = items.map(i => {
			return (
				<div key={i.id}>
					<Link to={`product/${i.id}`}>
						<Cards>
							{" "}
							<img src={i.picture} class="salePicture" />
							<p>{i.name}</p>
							<p>{i.price}</p>
							<button>addToCart</button>
						</Cards>
					</Link>
				</div>
			);
		});
		return <div className="welp">{displayItems}</div>;
	}
}
const mapStateToProps = state => state;

export default connect(
	mapStateToProps,
	{ getKidsBikes }
)(Kids);
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
