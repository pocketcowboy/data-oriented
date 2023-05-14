import Counter from "./components/Counter";
import Toolbar from "./components/Toolbar";

import { useApplicationState, ApplicationContext } from "./state";

export default () => {
  const app = useApplicationState();
  const [state, { setCounterValue }] = app;

  return (
    <ApplicationContext.Provider value={app}>
      <main>
        {state.counters.map((value, idx) => (
          <Counter value={value} setValue={setCounterValue.bind(null, idx)} />
        ))}
        <Toolbar />
      </main>
    </ApplicationContext.Provider>
  );
};
