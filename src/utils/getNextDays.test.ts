import { getNextDays } from "@utils/getNextDays";

describe("Utils: getNextDays", () => {
  it("should be return the next five days", () => {
    const days = getNextDays();

    expect(days.length).toBe(5);
  });
});
