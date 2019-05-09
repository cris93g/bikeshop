import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Logo />
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
            <Link to="/acessory">
              {" "}
              <div>Acessory</div>{" "}
            </Link>
          </NavBar>
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.section`
  width: 100vw;
  height: 15vh;
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
  width: 80%;
`;
const Logo = styled.section`
  width: 20%;
`;
