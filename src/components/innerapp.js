import React from "react";
import Header from "./header";

const InnerApp = props => (
  <div>
    <Header />
    <div>
      <div className="jumbotron">
        <h1>Hello from React!</h1>
        <div>You are in React.</div>
      </div>
    </div>
  </div>
);

export default InnerApp;
