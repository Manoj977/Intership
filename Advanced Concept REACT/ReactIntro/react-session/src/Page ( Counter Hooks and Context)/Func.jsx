import React, { useState } from "react";
import { ThemeContext } from "./CH";

//inc and dec

const Func = ({ initialCount }) => {
  const [count, Setcount] = useState(initialCount);
  return (
    <ThemeContext.Consumer>
      {(style) => (
        <div>
          <button
            style={style}
            onClick={() => {
              Setcount((PrevCount) => PrevCount - 1);
            }}
          >
            -
          </button>
          <span>{count}</span>
          <button
            style={style}
            onClick={() => {
              Setcount((PrevCount) => PrevCount + 1);
            }}
          >
            +
          </button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Func;
