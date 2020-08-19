import { PORT, HOST } from "../index";

describe("Port is defined", () => {
  it("Port is defined", () => {
    expect(PORT).toBeDefined();
  });
});

describe("Host is defined", () => {
  it("Host is defined", () => {
    expect(HOST).toBeDefined();
  });
});
