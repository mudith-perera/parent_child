import React, { useState } from "react";
import Child from "./Child.js";
function Parent() {
  const [parentData, setParentData] = useState("");

  function handleDataFromChild(data) {
    setParentData(data);
  }

  return (
    <div>
      <p>this is the parent class ->  {parentData}</p>
      <Child onDataFromChild={handleDataFromChild} />
    </div>
  );
}

export default Parent;
