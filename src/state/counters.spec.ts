import { resetCounters, setCounterValue } from "./counters";

describe("setCounterValue", () => {
  it("sets value of counter at index", () => {
    const state = {
      counters: [0, 0],
    };
    const expected = {
      counters: [0, 1],
    };
    expect(setCounterValue(state, 1, 1)).toEqual(expected);
  });
});

describe("resetCounters", () => {
  it("it should set counters to 0", () => {
    const state = {
      counters: [1, 2, 3],
    };
    const expected = {
      counters: [0, 0, 0],
    };
    expect(resetCounters(state)).toEqual(expected);
  });
});
