import React from "react";
import ReactDOM from "react-dom";

import "./fonts/fonts.css";

import styled from "@emotion/styled";
import { BrowserRouter as Router } from "react-router-dom";

import GlMain from "./main/gl_main.js";

import HeaderClass from "./header/header.js";
import FooterClass from "./footer/footer.js";

const Wraper = styled.div`
  background: #ffffff;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 0 25px;
`;

const Content = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Wraper>
          <Content>
            <HeaderClass />
            <GlMain />
          </Content>
          <FooterClass />
        </Wraper>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
