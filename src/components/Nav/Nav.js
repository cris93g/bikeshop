import React, { Component } from "react";
import styled from "styled-components";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Logo />
          <NavBar>
            <div>Men</div>
            <div>Women</div>
            <div>Kids</div>
            <div>Bikes</div>
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
