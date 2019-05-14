import React from "react";
import axios from "axios";
import styled from "styled-components";
import "./Product";
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
						<img src={pro.picture} className="ProductPic" />
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
	max-width: 500px;
	height: 500px;
`;
