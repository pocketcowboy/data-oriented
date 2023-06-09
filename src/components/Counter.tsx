export const Counter = ({
  value,
  setValue,
}: {
  value: number;
  setValue(value: number): void;
}) => {
  return (
    <p>
      <div>Counter: {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </p>
  );
};

export default Counter;
