import React from "react";
import Content from "./Content";
import ContentHooks from "./ContentHooks";

function App() {
  return (
    <div className="container">
    <h3>Content</h3>
      <Content count={0}/>
      <h3>Context Hooks</h3>
      <ContentHooks count={9}/>
    </div>
  );
}

export default App;
