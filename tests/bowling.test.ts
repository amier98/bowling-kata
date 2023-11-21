import { bowlingFrame } from "../src/bowling";

describe("frames", () => {
  it("return correct score for 10 frames", () => {
    //Arrange
    const input = "11 11 11 11 11 11 11 11 11 11";
    //Act
    const expectedOutput = 20;
    //Assert
    expect(bowlingFrame(input)).toBe(expectedOutput);
  });

  it("return correct score of spare", () => {
    //arrange
    const input = "5/ 7/ 7/ 7/ 7/ 7/ 7/ 7/ 7/ 73";
    //act
    const expectedOutput = 163;
    //assert
    expect(bowlingFrame(input)).toBe(expectedOutput);
  });
});
