import React from "react";
import axios from "axios";
import styled from "styled-components";
class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			product: []
		};
	}
	componentDidMount() {
		axios
			.post(`/api/product`, {
				id: this.props.match.params.id
			})
			.then(response => {
				this.setState({ product: response.data });
			});
	}
	render() {
		const { product } = this.state;
		let displayProduct = product.map(pro => {
			return (
				<div>
					<Cards>
						<p>{pro.name}</p>
						<img src={pro.picture} class="salePicture" />
						<p>{pro.price}</p>
						<p>{pro.description}</p>
					</Cards>
				</div>
			);
		});
		return <div>{displayProduct}</div>;
	}
}

export default Product;

const Cards = styled.div`
	max-width: 600px;
	height: 600px;
	transition: 0.3s;
	box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.2);
	cursor: pointer;
	&:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
`;
