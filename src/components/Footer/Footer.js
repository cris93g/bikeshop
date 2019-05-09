import React, { Component } from "react";
import styled from "styled-components";

export default class Footer extends Component {
	render() {
		return (
			<div>
				<Wrapper />
			</div>
		);
	}
}
const Wrapper = styled.section`
	margin-top: 20px;
	width: 100vw;
	height: 10vh;
	background-color: black;
	display: flex;
`;
