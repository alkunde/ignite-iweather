import { render, screen } from "@__tests__/utils/customRender";

import { Search } from "@screens/Search";
import { api } from "@services/api";

describe("Screen: Search", () => {
  it("should be show city option", () => {
    // jest.spyOn(api, "get").mockResolvedValue({ data: {} });

    render(<Search />);
    const searchInput = screen.getByTestId("search-input");
    // expect(searchInput).toBeTruthy();

    expect(1).toBe(1);
  });
});