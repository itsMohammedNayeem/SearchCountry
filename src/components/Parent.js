import React, { useState } from "react";
import Child from "./Child";

// parent.js component will have a input field and child.js component will have a button, when button in child is clicked, the data typed in parent.js component input will be rendered here

const Parent = () => {
  const [data, setData] = useState("");

  const handleCallback = (childData) => {
    setData(childData);
  };

  return (
    <div>
      <h1>Parent</h1>
      <Child handleCallback={handleCallback} />
      {data}
    </div>
  );
};

export default Parent;
