function numWaystoClimb(n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else {
    return numWaystoClimb(n - 1) + numWaystoClimb(n - 2);
  }
}

// Memoization for Memory Optimization
let memo = {};

function numWaysMemoized(n) {
  memo[1] = 1;
  memo[2] = 2;
  if (!memo[n]) {
    memo[n] = numWaysMemoized(n - 1) + numWaysMemoized(n - 2);
  }
  return memo[n];
}

console.log(numWaysMemoized(5));
