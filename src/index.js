import React from "react";
import ReactDOM from "react-dom";

import "./fonts/fonts.css";

import styled from "@emotion/styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Main from "./main/main.js";
import Main_osob from "./main/main_osob.js";
import Main_pent from "./main/main_pent.js";
import Main_vubkv from "./main/main_vubkv.js";

import Header_class from "./header/header.js";
import Footer_class from "./footer/footer.js";

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
            <Header_class />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/main_osob" component={Main_osob} />
              <Route exact path="/main_pent" component={Main_pent} />
              <Route exact path="/main_vubkv" component={Main_vubkv} />
            </Switch>
          </Content>
          <Footer_class />
        </Wraper>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
