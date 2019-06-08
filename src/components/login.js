import React, { useState, useEffect, useContext } from "react";
import GlobalContext from "../context/globalcontext";
//import jQuery from "jquery";

const Login = props => {
  useEffect(() => {
    document.body.classList.add("hold-transition");
    document.body.classList.add("login-page");
  }, []);

  const [globalcontext, setGlobalContext] = useContext(GlobalContext);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const onsubmit = e => {
    e.preventDefault();

    setGlobalContext(
      Object.assign({}, { ...globalcontext }, { isLoading: true })
    );

    setTimeout(() => {
      setGlobalContext(
        Object.assign({}, { ...globalcontext }, { isLoading: false })
      );
    }, 3000);

    //props.history.push("/redd");
  };

  return (
    <div className="login-box">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic"
      />
      <div className="login-logo">
        <b>Admin</b>
        <i>ReDirector</i>
      </div>
      <div className="login-box-body">
        <p className="login-box-msg">Sign in to start your session</p>

        <form onSubmit={onsubmit} method="post">
          <div className="form-group has-feedback">
            <input
              onChange={e => {
                setUser(e.target.value);
              }}
              value={user}
              type="text"
              className="form-control"
              placeholder="Username"
            />
            <span className="form-control-feedback">
              <i className="fa fa-user" />{" "}
            </span>
          </div>
          <div className="form-group has-feedback">
            <input
              onChange={e => {
                setPass(e.target.value);
              }}
              value={pass}
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <span className="form-control-feedback">
              <i className="fa fa-lock" />{" "}
            </span>
          </div>
          <div className="row">
            <div className="col-xs-8" />
            <div className="col-xs-4">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-flat"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
