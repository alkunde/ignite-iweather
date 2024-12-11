import { isDayTime } from "@utils/isDayTime";

describe("Utils: isDayTime", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should be return false if hour greater than 18", () => {
    jest.spyOn(global.Date.prototype, "getHours").mockReturnValue(19);
    const hour = isDayTime();

    expect(hour).toBeFalsy();
  });

  it("should be return false if hour earlier than 6", () => {
    jest.spyOn(global.Date.prototype, "getHours").mockReturnValue(5);
    const hour = isDayTime();

    expect(hour).toBeFalsy();
  });

  it("should be return true if hour between 6 and 18", () => {
    jest.spyOn(global.Date.prototype, "getHours").mockReturnValue(10);
    const hour = isDayTime();

    expect(hour).toBeTruthy();
  });
});