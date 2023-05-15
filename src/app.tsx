import Counter from "./components/Counter";
import Toolbar from "./components/Toolbar";

import { useApplicationState, ApplicationState } from "./state";

export default () => {
  const app = useApplicationState();
  const [state, { setCounterValue }] = app;

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
