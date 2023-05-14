import { useState } from "preact/hooks";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <p>
      <div>Counter: {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </p>
  );
};

export default Counter;
