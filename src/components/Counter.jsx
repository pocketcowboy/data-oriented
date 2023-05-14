import { ApplicationContext } from "../state";

export const Counter = ({ value, setValue }) => {
  return (
    <p>
      <div>Counter: {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </p>
  );
};

export default Counter;
