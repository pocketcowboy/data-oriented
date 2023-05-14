import Counter from "./components/Counter";
import { useApplicationState } from "./state";

export default () => {
  const { getCounterValues, setCounterValue } = useApplicationState();

  return (
    <main>
      {getCounterValues()
        .toArray()
        .map((value, idx) => (
          <Counter value={value} setValue={setCounterValue.bind(null, idx)} />
        ))}
    </main>
  );
};
