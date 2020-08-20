import axios from "axios";
import { Submit } from "../controls/submit.routes";

describe("Check captcha", () => {
  it("captcha verification was successful", async () => {
    const res = { success: true };
    axios.get.mockImplementationOnce(() => Promise.resolve(res));
  });
  it("captcha verification failed", async () => {
    let errMessage = "Network Error";
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errMessage))
    );
  });
});

describe("submit and update form", () => {
  it("should update google sheet", async () => {
    const update = { updateSheet: jest.fn() };
    res = { message: "Form submitted successfully" };
    req = {
      body: {
        name: "James", //Full object according to yup schema
      },
    };
    update.updateSheet.mockReturnValue(res);

    const result = await Submit(req);
    expect(result).toEqual(res);
    expect(update.updateSheet).toHaveBeenCalledTimes(1);
  });
});
