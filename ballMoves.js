// To find the minimum number of moves take a complete cluster of 2 space 
// separated balls, move it through the bucket list and find the best match. 
// Then all balls that are not in that best match need to be moved.

export default function ballMoves(bucketsAndBallsString) {
  const noOfBalls = bucketsAndBallsString.match(/b/g).length;
  const noOfBuckets = bucketsAndBallsString.length;
    
  // If number of buckets is less than number of balls * 2 - 1, then task is impossible 
  if (noOfBuckets < (noOfBalls * 2) - 1){
    return -1;
  }

  let highestNoOfCorrectlySpacedBalls = 0;
  for (let index = 0; index < bucketsAndBallsString.length - (noOfBalls * 2 - 2); index++) {
    let numberOfCorrectlySpacedBalls = 0;
    for (let ballIndex = 0; ballIndex < noOfBalls; ballIndex++) {
      if (bucketsAndBallsString[index + (ballIndex * 2)] === 'b') {
        numberOfCorrectlySpacedBalls += 1;
      }
    }

    if (numberOfCorrectlySpacedBalls > highestNoOfCorrectlySpacedBalls) {
      highestNoOfCorrectlySpacedBalls = numberOfCorrectlySpacedBalls;
    }    
  }

  return noOfBalls - highestNoOfCorrectlySpacedBalls;
}