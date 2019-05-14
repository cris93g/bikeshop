import React, { Component } from "react";
import styled from "styled-components";
import { getMensBikes } from "../../redux/ducks/userReducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Men extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getMensBikes();
	}
	render() {
		const { items } = this.props.userReducer;
		console.log(this.props.userReducer);
		let displayItems = items.map(i => {
			return (
				<div key={i.id}>
					<Link to={`product/${i.id}`}>
						<Cards>
							<img src={i.picture} class="salePicture" />
							<p>{i.name}</p>
							<p>{i.price}</p>
							<button>addToCart</button>
						</Cards>
					</Link>
				</div>
			);
		});
		return (
			<div>
				{" "}
				<Banner />
				<div className="welp">{displayItems}</div>
			</div>
		);
	}
}
const mapStateToProps = state => state;
export default connect(
	mapStateToProps,
	{ getMensBikes }
)(Men);

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

const Banner = styled.section`
	width: 100vw;
	height: 40vh;
	background-image: url("https://images.unsplash.com/photo-1468436385273-8abca6dfd8d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1988&q=80"); /* The image used */
	background-color: #cccccc; /* Used if the image is unavailable */
	height: 500px; /* You must set a specified height */
	background-position: center; /* Center the image */
	background-repeat: no-repeat; /* Do not repeat the image */
	background-size: cover;
`;
