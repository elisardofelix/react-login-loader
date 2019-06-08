import React, { useState } from "react";
import "loaders.css";
import "./loader.css";

const Loader = ({ active }) => {
  const [firstTime, setFirstTime] = useState(true);
  const [prevState, setPrevState] = useState(false);

  const isActive = () => {
    if (active !== prevState) {
      setPrevState(!prevState);
      setFirstTime(false);
    }

    return (
      "overlay " +
      (firstTime
        ? "hide"
        : active || false
        ? "scale-in-hor-left"
        : "scale-out-hor-right")
    );
  };

  return (
    <div id="loader" className={isActive()}>
      <div className="overlay__inner">
        <div className="overlay__content">
          <div className="loader">
            <div className="pacman">
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loader;
