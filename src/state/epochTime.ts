import { produce } from "immer";
import { State } from ".";

export const setEpochTime = (state: State, time: number) =>
  produce(state, (draft) => {
    draft.epochTime = time;
  });
