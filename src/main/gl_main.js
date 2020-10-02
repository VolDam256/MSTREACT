import React from "react";

import Main from "./main.js";
import Main_osob from "./main_osob.js";
import Main_pent from "./main_pent.js";
import Main_vubkv from "./main_vubkv.js";
import styled from "@emotion/styled";
import { Switch, Route, withRouter } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";

const PageTransitionA = styled(PageTransition)`
  position: absolute;
  top: -95px;
  width: 100vw;
`;

function gl_main() {
  return (
    <PageTransitionA preset="moveToLeftFromRight">
      <Route exact path="/" component={Main} />
      <Route exact path="/main_osob" component={Main_osob} />
      <Route exact path="/main_pent" component={Main_pent} />
      <Route exact path="/main_vubkv" component={Main_vubkv} />
    </PageTransitionA>
  );
}

export default withRouter(gl_main);
