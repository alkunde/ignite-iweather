import { api } from "@services/api";
import { getCityByNameService } from "@services/getCityByNameService";

import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";

describe("Service: getCityByNameService", () => {
  it("should return empty detail", async () => {
    const response = await getCityByNameService("São Paulo");

    expect(response.length).toBe(0);
  });

  it("should return city details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });
    const response = await getCityByNameService("São Paulo");

    expect(response.length).toBe(1);
    expect(response[0].name).toBe("São Paulo, BR");
  });
});