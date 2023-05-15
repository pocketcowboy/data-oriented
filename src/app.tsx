import { useEffect } from "preact/hooks";
import Counter from "./components/Counter";
import Toolbar from "./components/Toolbar";

import { useApplicationState, ApplicationState } from "./state";
import useEpochTime from "./hooks/useEpochTime";

export default () => {
  const app = useApplicationState();
  const [state, { setCounterValue, setEpochTime }] = app;
  const time = useEpochTime();

  useEffect(() => setEpochTime(time), [time]);

  return (
    <ApplicationState.Provider value={app}>
      <main>
        {state.counters.map((value, idx) => (
          <Counter
            value={value}
            setValue={(value: number) => setCounterValue(idx, value)}
          />
        ))}
        <Toolbar />
      </main>
    </ApplicationState.Provider>
  );
};
