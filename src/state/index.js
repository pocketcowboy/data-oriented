import { fromJS } from "immutable";
import { useState } from "preact/hooks";
import { createContext } from "preact";
import { getCounterValues, resetCounters, setCounterValue } from "./counters";

export const useApplicationState = () => {
  const [state, setState] = useState(
    fromJS({
      counters: [0, 0],
    })
  );

  const wrapMutation =
    (fn) =>
    (...args) =>
      setState(fn(state, ...args));

  const wrapQuery = (fn) => fn.bind(null, state);

  return {
    getCounterValues: wrapQuery(getCounterValues),
    setCounterValue: wrapMutation(setCounterValue),
    resetCounters: wrapMutation(resetCounters),
  };
};

export const ApplicationContext = createContext();
