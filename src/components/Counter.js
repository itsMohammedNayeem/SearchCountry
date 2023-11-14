import React, { useState } from "react";
// import "./Counter.css";

// use prop passed from RepeatComponent as key to create unique key for each Counter

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="counter_header">Counter</h1>
      <p className="count">
        <strong>{count}</strong>
      </p>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
};

export default Counter;
