import React from "react";
import styled from "@emotion/styled";

const Main = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 0.17fr 0.83fr;
  background: #f0f0f0;
  top: 55px;
  margin-left: 35px;
  width: calc(100% - 115px);
  height: 840px;
  opacity: 1;
  z-index: 1;
`;
export default class Footer_class extends React.Component {
  render() {
    return <Main></Main>;
  }
}
