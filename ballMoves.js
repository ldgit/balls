
// If number of buckets is greater than number of balls * 2 - 1, then find largest cluster 2 space 
// separated balls, count them, all other balls need to be moved.

// If number of buckets is equal to number of balls * 2 - 1, then all balls on even indexes need to be 
// moved.

// If number of buckets is less than number of balls * 2 - 1, then task is impossible 


export default function ballMoves(bucketsAndBallsString) {
  const noOfBalls = bucketsAndBallsString.match(/b/g).length;
  const noOfBuckets = bucketsAndBallsString.length;

  if (noOfBalls === 1) {
    return 0;
  }

  if (noOfBuckets < (noOfBalls * 2) - 1){
    return -1;
  }

  if (noOfBuckets === (noOfBalls * 2) - 1){
    let noOfBallsOnOddIndexes = 0;
    for (let index = 1; index < bucketsAndBallsString.length; index += 2) {
      if (bucketsAndBallsString[index] === 'b') {
        noOfBallsOnOddIndexes += 1;
      }
    }

    return noOfBallsOnOddIndexes;
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