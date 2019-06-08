import "bootstrap/dist/css/bootstrap.min.css";
import "./css/ionicons.min.css";
import "./css/AdminLTE.min.css";
import "./css/font-awesome.min.css";

import React, { useState } from "react";
import { render } from "react-dom";
import App from "./components/app";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalContext from "./context/globalcontext";
import Loader from "./components/tools/loader";

const Root = () => {
  const [contextState, setContextState] = useState({
    isAuth: false,
    isLoading: false
  });
  return (
    <Router>
      <Loader active={contextState.isLoading} />
      <GlobalContext.Provider value={[contextState, setContextState]}>
        <App />
      </GlobalContext.Provider>
    </Router>
  );
};

render(<Root />, document.getElementById("root"));
