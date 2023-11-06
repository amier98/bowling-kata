import { bowlingCalc } from "../src/bowling";
describe("tests for bowlingCalc function", () => {
  it("return the score of one pin", () => {
    expect(bowlingCalc("1")).toBe(1);
  });
  it("return the score of 20 rolls", () => {
    expect(bowlingCalc("11 11 11 11 11 11 11 11 11 11")).toBe(20);
  });
  it("return the score of a strike", () => {
    expect(bowlingCalc("X")).toBe(10);
  });
});
