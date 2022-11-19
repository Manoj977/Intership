import React, { useState } from "react";

function ContentHooks({ count }) {
  //   alert(count);
  const [first, setFirst] = useState(count);
  // alert("first: " + first + " setFirst: " + setFirst);

  return (
    <div>
      <button onClick={() => setFirst((prevCount) => prevCount - 1)}>-</button>
      <div className="spans">
        <span>{first}</span>
      </div>
      <button onClick={() => setFirst((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}
export default ContentHooks;
