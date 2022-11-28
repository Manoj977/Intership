import React, { useState } from "react";
import Func from "./Func";

export const ThemeContext = React.createContext();

const CH = () => {
  const [color, setColor] = useState("yellow");
//   const [font, setFont] = useState("40px");
  return (
    <ThemeContext.Provider value={{ backgroundColor: color/*, fontSize: font*/ }}>
      <>
        <Func initialCount={0} />
      </>
      <button
        onClick={() =>
          setColor((PrevTheme, /*PrevFont*/) => {
            return (
              PrevTheme === "yellow" ? "orange" : "yellow"
            //   PrevFont === "40px" ? "50px" : "40px"
            );
          })
        }
      >
        Toogle Button
      </button>
    </ThemeContext.Provider>
  );
};

export default CH;
