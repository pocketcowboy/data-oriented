import Counter from "./components/Counter";
import Toolbar from "./components/Toolbar";

import { useApplicationState, ApplicationContext } from "./state";

export default () => {
  const state = useApplicationState();
  const { getCounterValues, setCounterValue } = state;

  return (
    <ApplicationContext.Provider value={state}>
      <main>
        {getCounterValues()
          .toArray()
          .map((value, idx) => (
            <Counter value={value} setValue={setCounterValue.bind(null, idx)} />
          ))}
        <Toolbar />
      </main>
    </ApplicationContext.Provider>
  );
};
