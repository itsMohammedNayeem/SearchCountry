import React, { useState } from "react";
import Counter from "./Counter";

const RepeatComponent = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add
      </button>
      {/* substract value of count until 0, and if the count is 0 then dont decrement count */}
      <button
        onClick={() =>
          setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0))
        }
      >
        Remove
      </button>
      {/* Array.from creates new Array , 1st param is An iterable object to convert to an array, 2nd param is A mapping function to call on every element of the array. */}
      {Array.from({ length: count }, (i) => (
        <Counter />
      ))}
    </>
  );
};

export default RepeatComponent;
