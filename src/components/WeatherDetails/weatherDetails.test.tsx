import { render, screen, waitFor } from "@testing-library/react-native";

import { WeatherDetails } from "@components/WeatherDetails";

describe("Component: WeatherDetails", () => {
  it("should be render WeatherDetails", () => {
    render(
      <WeatherDetails
        data={{
          temp_kf: "100",
          humidity: "100%",
          feels_like: "Quente",
          wind_speed: "rápido",
          probability: "25%",
        }}
      />
    );

    const sensacao = waitFor(() => screen.findByText("Sensação térmica"));
    expect(sensacao).toBeTruthy();
  });
});