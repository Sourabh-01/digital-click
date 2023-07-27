import React, { lazy, Suspense } from "react";
import { Router, Route, withRouter } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import { connect } from "react-redux";
import { history } from "./managers/history";
const Main = withRouter(lazy(() => import("./modules/main/mainComponent")));

const Routes = () => {
  return (
    <Router history={history}>
      <Suspense>
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <Route exact path={"/"} component={Main} />
          <Route exact path={"/:menu"} component={Main} />
          <Route exact path={"/:menu/:subMenu"} component={Main} />
          <Redirect exact from="*" to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Routes);
