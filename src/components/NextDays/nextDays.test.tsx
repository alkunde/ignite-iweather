import { render, screen } from "@testing-library/react-native";

import clearDayIcon from "@assets/clear_day.svg";
import { DayProps } from "@components/Day";
import { NextDays } from "@components/NextDays";

describe("Component: NextDays", () => {
  it("should be render NextDay", () => {
    const data: DayProps[] = [
      { day: "09/12", icon: clearDayIcon, min: "30° C", max: "34° C", weather: "Céu limpo" },
      { day: "10/12", icon: clearDayIcon, min: "30° C", max: "34° C", weather: "Céu limpo" },
      { day: "11/12", icon: clearDayIcon, min: "30° C", max: "34° C", weather: "Céu limpo" },
      { day: "12/12", icon: clearDayIcon, min: "30° C", max: "34° C", weather: "Céu limpo" },
      { day: "13/12", icon: clearDayIcon, min: "30° C", max: "34° C", weather: "Céu limpo" },
    ];

    render(
      <NextDays
        data={data}
      />
    );

    expect(screen.getByText('09/12')).toBeTruthy();
  });
});