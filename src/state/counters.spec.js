import { fromJS, List } from "immutable";
import { getCounterValues, resetCounters, setCounterValue } from "./counters";

describe("getCounterValues", () => {
  it("returns values as an array", () => {
    const state = fromJS({
      counters: [1, 2, 3],
    });
    expect(getCounterValues(state)).toEqual(List([1, 2, 3]));
  });
});

describe("setCounterValue", () => {
  it("sets value of counter at index", () => {
    const state = fromJS({
      counters: [0, 0],
    });
    const expected = fromJS({
      counters: [0, 1],
    });
    expect(setCounterValue(state, 1, 1)).toEqual(expected);
  });
});

describe("resetCounters", () => {
  it("it should set counters to 0", () => {
    const state = fromJS({
      counters: [1, 2, 3],
    });
    const expected = fromJS({
      counters: [0, 0, 0],
    });
    expect(resetCounters(state)).toEqual(expected);
  });
});
