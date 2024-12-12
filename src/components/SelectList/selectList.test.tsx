import { fireEvent, render, screen } from "@testing-library/react-native";

import { SelectList } from "@components/SelectList";
import { CityProps } from "@services/getCityByNameService";

describe("Component: SelectList", () => {
  it("should be return city details selected", () => {
    const data: CityProps[] = [
      { id: "1", name: "Campo Grande", latitude: 123, longitude: 456 },
      { id: "2", name: "Campinas", latitude: 234, longitude: 567 },
    ];

    const onPress = jest.fn();

    render(
      <SelectList
        data={data}
        onChange={() => {}}
        onPress={onPress}
      />
    );

    const selectedCity = screen.getByText(/campo/i);
    fireEvent.press(selectedCity);
    const options = screen.getByTestId("options");

    expect(onPress).toHaveBeenCalledTimes(1);
    expect(options.children).toHaveLength(2);
    expect(onPress).toHaveBeenCalledWith(data[0]);
  });

  it("not should be show options when data props is empty", () => {
    render(
      <SelectList
        data={[]}
        onChange={() => {}}
        onPress={() => {}}
      />
    );

    const options = screen.getByTestId("options");
    expect(options.children).toHaveLength(0);
  });
});