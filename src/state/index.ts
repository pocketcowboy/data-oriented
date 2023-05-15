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
    <U extends any[]>(fn: (state: State, ...args: U) => State) =>
    (...args: U) =>
      setState(fn(state, ...args));

  return [
    state,
    {
      setCounterValue: wrapMutation(setCounterValue),
      resetCounters: wrapMutation(resetCounters),
    },
  ] as const;
};

export const ApplicationState = createContext({});
