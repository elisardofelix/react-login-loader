import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import InnerApp from "./innerapp";
import Login from "./login";
import GlobalContext from "../context/globalcontext";

const PageNotFound = props => (
  <div>
    <h1>Nothing to Show!</h1>
    <div>You are in React.</div>
  </div>
);

const App = props => {
  const [globalContext] = useContext(GlobalContext);
  const ProtectedComponent = comp =>
    globalContext.isAuth ? comp : () => <Redirect to="/login" />;
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={ProtectedComponent(InnerApp)} />
        <Route path="/courses" component={ProtectedComponent(InnerApp)} />
        <Route path="/redi" component={ProtectedComponent(InnerApp)} />
        <Route path="/redd" component={InnerApp} />
        <Route path="/login" component={Login} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};
export default App;
