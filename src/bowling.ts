export function bowlingFrame(gameFrame: string): number {
  let score = 0;
  let rolls = 0;

  const gameRolls = gameFrame.split("");
  console.log(gameRolls);

  const specialRolls: { [key: string]: number } = {
    "/": 10,
  };
  // a spare(/) is when both rolls in a frame equals 10 and plus the score of the next roll of next frame

  // a strike(X) is when you knock down all pins in first attempt

  //cant get score until frames end

  //you cannot play more than 10 frames

  for (let frames = 0; frames < 10; frames++) {
    if (gameRolls[rolls + 1] === "/") {
      rolls += 3;
      score += parseInt(gameRolls[rolls]) + specialRolls["/"];
    } else {
      score += parseInt(gameRolls[rolls]) + parseInt(gameRolls[rolls + 1]);
    }
    //rolls += 3;
  }

  return score;
}
