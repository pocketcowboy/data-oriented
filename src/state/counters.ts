import { produce } from "immer";
import { State } from ".";

export const setCounterValue = (state: State, index: number, value: number) =>
  produce(state, (draft) => {
    draft.counters[index] = value;
  });

export const resetCounters = (state: State) =>
  produce(state, (draft) => {
    draft.counters.fill(0);
  });
