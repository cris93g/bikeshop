import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth";
export default class Nav extends Component {
	render() {
		return (
			<div>
				<Wrapper>
					<NavBar>
						<Link to="/men">
							{" "}
							<div>Men</div>
						</Link>
						<Link to="/women">
							{" "}
							<div>Women</div>
						</Link>
						<Link to="/kids">
							{" "}
							<div>Kids</div>
						</Link>
						<Link to="/bikes">
							{" "}
							<div>Bikes</div>
						</Link>
						<Link to="/">
							{" "}
							<div>Acessory</div>{" "}
						</Link>
					</NavBar>
					<IconBar />
					<Logo>
						<Auth />
					</Logo>
				</Wrapper>
			</div>
		);
	}
}

const Wrapper = styled.section`
	width: 100vw;
	height: 10vh;
	background-color: #f6f6f6;
	display: flex;
	margin-bottom: 10px;
`;

const NavBar = styled.section`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	margin: auto;
	width: 30%;
`;
const Logo = styled.section`
	width: 10%;
	margin: auto;
	display: flex;
	justify-content: space-around;
`;

const IconBar = styled.section`
	margin: auto;
	width: 45%;
`;
