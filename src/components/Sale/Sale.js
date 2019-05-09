import React, { Component } from "react";

import axios from "axios";
import styled from "styled-components";
import "./Sale.css";
class Sale extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		};
	}

	componentDidMount() {
		axios
			.get("/api/bikes")
			.then(response => this.setState({ items: response.data }));
	}

	render() {
		console.log(this.state.items);
		let { items } = this.state;
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
							{/* <CardsContainer> */}
							<Cards>
								<p>{i.name}</p>
								<img src={i.picture} class="salePicture" />
								<p>{i.price}</p>
							</Cards>
							{/* </CardsContainer> */}
						</div>
					</div>
				);
			});
		return <div>{saleItems}</div>;
	}
}
const mapStateToPros = state => state;

export default Sale;

const Cards = styled.div`
	max-width: 200px;
	height: 280px;
	transition: 0.3s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
	&:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    poi
`;
// const CardsContainer = styled.section`
// 	display: flex;
// 	justify-content: space-around;
// 	width: 80%;
// 	height: 40vh;
// `;
