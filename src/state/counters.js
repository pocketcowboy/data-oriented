export const setCounterValue = (state, index, value) =>
  state.setIn(["counters", index], value);

export const getCounterValues = (state) => state.get("counters");

export const resetCounters = (state) =>
  state.updateIn(["counters"], (list) => list.map(() => 0));
