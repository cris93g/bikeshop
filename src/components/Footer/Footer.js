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
  height: 20vh;
  background-color: black;
  display: flex;
`;
