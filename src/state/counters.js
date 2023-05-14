import { getIn, setIn } from "immutable";

export const setCounterValue = (state, index, value) =>
  setIn(state, ["counters", index], value);

export const getCounterValues = (state) => getIn(state, ["counters"]);
