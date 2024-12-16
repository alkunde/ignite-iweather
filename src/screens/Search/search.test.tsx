import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";
import { fireEvent, render, screen, waitFor } from "@__tests__/utils/customRender";
import { api } from "@services/api";
import { Search } from "@screens/Search";

describe("Screen: Search", () => {
  it("should be show city option", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });

    const { debug } = render(<Search />);

    const searchInput = screen.getByTestId("search-input");
    fireEvent.changeText(searchInput, "São Paulo");

    const option = await waitFor(() => screen.findByText(/são paulo/i, {}, { timeout: 5000 }));

    expect(option).toBeTruthy();
  });
});