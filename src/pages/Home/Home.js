import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Auth from "../../components/Auth/Auth";
import Sale from "../../components/Sale/Sale";
class Home extends Component {
	render() {
		return (
			<div>
				{/* <Nav /> */}
				<Banner />
				<h2>FEATURED PRODUCTS</h2>
				<Feature>
					<Sale />
				</Feature>
				<Collection>
					<FirstP />
					<SecondP />
				</Collection>
				<Collectiontwo>
					<ThirdP />

					<FourthP />
				</Collectiontwo>
				<Footer />
			</div>
		);
	}
}

export default Home;

const Banner = styled.section`
	width: 100vw;
	height: 40vh;
	background-image: url("https://images.unsplash.com/photo-1524851037027-92da154aba10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"); /* The image used */
	background-color: #cccccc; /* Used if the image is unavailable */
	height: 500px; /* You must set a specified height */
	background-position: center; /* Center the image */
	background-repeat: no-repeat; /* Do not repeat the image */
	background-size: cover;
`;

const Feature = styled.section`
	margin: auto;
	width: 80%;
	height: 40vh;

	display: flex;
	justify-content: space-around;
`;

const Collection = styled.section`
	margin-top: 20px;
	margin: auto;
	width: 80%;
	height: 40vh;

	display: flex;
	justify-content: space-around;
	margin-bottom: 20px;
`;

const FirstP = styled.section`
	border-radius: 5px;
	margin-top: 20px;
	margin: auto;
	background-image: url("https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1395&q=80"); /* The image used */
	width: 48%;
	height: 100%;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;
const SecondP = styled.section`
	border-radius: 5px;
	margin-top: 20px;
	margin: auto;
	background-image: url("https://images.unsplash.com/photo-1489090263191-1fa3eac6dca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80");
	width: 48%;
	height: 100%;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;
const Collectiontwo = styled.section`
	margin-top: 20px;
	margin: auto;
	width: 80%;
	height: 40vh;

	display: flex;
	justify-content: space-around;
`;
const ThirdP = styled.section`
	border-radius: 5px;
	margin-top: 20px;
	margin: auto;
	background-image: url("https://images.unsplash.com/photo-1494951446597-0cf447c066d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80"); /* The image used */
	width: 48%;
	height: 100%;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const FourthP = styled.section`
	border-radius: 5px;
	margin-top: 20px;
	margin: auto;
	background-image: url("https://images.unsplash.com/photo-1544071005-088fe48c0799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1576&q=80"); /* The image used */
	width: 48%;
	height: 100%;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;
