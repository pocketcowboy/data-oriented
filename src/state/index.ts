import { useState } from "preact/hooks";
import { createContext } from "preact";
import { resetCounters, setCounterValue } from "./counters";

export type State = {
  counters: number[];
};

export const useApplicationState = () => {
  const [state, setState] = useState<State>({
    counters: [0, 0],
  });

  const wrapMutation =
    (fn) =>
    (...args) =>
      setState(fn(state, ...args));

  const wrapQuery = (fn) => fn.bind(null, state);

  return [
    state,
    {
      setCounterValue: wrapMutation(setCounterValue),
      resetCounters: wrapMutation(resetCounters),
    },
  ] as const;
};

export const ApplicationState = createContext({});
