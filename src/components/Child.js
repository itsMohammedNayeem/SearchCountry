import React from "react";

const Child = ({ handleCallback }) => {
  const handleClick = (e) => {
    handleCallback(e.target.value);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Child</h1>
      <input type="text" />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Child;
