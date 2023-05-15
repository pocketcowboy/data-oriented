import { useState } from "preact/hooks";
import { createContext } from "preact";
import { resetCounters, setCounterValue } from "./counters";
import { setEpochTime } from "./epochTime";

export type State = {
  counters: number[];
  epochTime?: number;
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
      setEpochTime: wrapMutation(setEpochTime),
    },
  ] as const;
};

export const ApplicationState =
  createContext<ReturnType<typeof useApplicationState>>(undefined);
