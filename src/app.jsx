import Counter from "./components/Counter";
import Toolbar from "./components/Toolbar";

import { useApplicationState } from "./state";

export default () => {
  const { getCounterValues, setCounterValue, resetCounters } =
    useApplicationState();

  return (
    <main>
      {getCounterValues()
        .toArray()
        .map((value, idx) => (
          <Counter value={value} setValue={setCounterValue.bind(null, idx)} />
        ))}
      <Toolbar onResetCounters={resetCounters} />
    </main>
  );
};
