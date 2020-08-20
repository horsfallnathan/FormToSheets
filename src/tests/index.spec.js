const request = require("supertest");
const { app } = require("../index");

describe("Test app object", () => {
  test("It should return 200 status", () => {
    return request(app)
      .get("/test")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
