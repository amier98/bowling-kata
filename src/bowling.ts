export function bowlingCalc(allRolls: string): number {
  let score = 0;
  // If it equals 10 pins, that is one roll

  //every player has two tries
  //still trying to figure out how to skip the spaces in the for loop instead of removing the spaces
  const array: string[] = allRolls.split("");

  const result = array.filter((word) => word.trim().length > 0);

  if (array.includes("X")) {
    return 10;
  }

  console.log(result);

  for (let rolls = 0; rolls < result.length; rolls++) {
    score += parseInt(result[rolls]);
    console.log(score);
  }

  // for (let frame = 0; frame < 10; frame++) {
  //   let current = 0;

  //   score += parseInt(array[current] + array[current + 1]);
  //   //i want to skip the space by incremening the current value which would be 2 at the end of the first loop
  //   //however, it is not working as intended
  //   current += 1;
  // }

  return score;
}
