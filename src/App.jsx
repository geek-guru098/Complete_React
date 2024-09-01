import React from "react";

import Props from "./components/Props";
import State from "./components/State";

function App() {
  return (
    <div>
      <Props title="Hello World" about="This is a test." />
      <State text="Put some text down" />
    </div>
  );
}

export default App;
