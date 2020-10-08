import React from "react";

import Main from "./main.js";
import Main_osob from "./main_osob.js";
import Main_pent from "./main_pent.js";
import Main_vubkv from "./main_vubkv.js";

import { Switch, Route, withRouter } from "react-router-dom";

function gl_main() {
  return (
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={Main} />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/main_osob"}
        component={Main_osob}
      />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/main_pent"}
        component={Main_pent}
      />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/main_vubkv"}
        component={Main_vubkv}
      />
    </Switch>
  );
}

export default withRouter(gl_main);
