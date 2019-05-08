import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 20px;
  width: 100vw;
  height: 20vh;
  background-color: black;
`;

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Wrapper />
      </div>
    );
  }
}
