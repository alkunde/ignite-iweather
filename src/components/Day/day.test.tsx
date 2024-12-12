import { render, screen } from "@testing-library/react-native";

import clearDayIcon from "@assets/clear_day.svg";
import { Day } from "@components/Day";

describe("Component: Day", () => {
  it("should", () => {
    render(
      <Day
        data={{
          day: "09/12",
          min: "20° C",
          max: "25° C",
          icon: clearDayIcon,
          weather: "Céu limpo",
        }}
      />
    );

    expect(screen.getByText("09/12")).toBeTruthy();
  });
});