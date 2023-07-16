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

  type WrapMutation = {
    <U extends unknown[]>(fn: (state: State, ...args: U) => State): (...args: U) => void
  };
  const wrapMutation: WrapMutation = (fn) => (...args) => setState(fn(state, ...args))

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
