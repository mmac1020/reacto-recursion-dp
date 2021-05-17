function fibNaive(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibNaive(n - 1) + fibNaive(n - 2);
  }
}

// dynamic programming + memoization
let cache = {
  3: 2,
  4: 3,
  5: 5,
  6: 8
};


// 7
function fibOptimized(n) {
  if (cache[n]) {
    return cache[n];
  } else if (n <= 2) {
    return 1;
  } else {
    // cache[7] = fibOptimized(6) + fibOptimized(5) == 13
    // cache[6] = fibOptimized(5) + fibOptimized(4) == 8
    // cache[5] = fibOptimized(4) + fibOptimized(3) == 5
    // cache[4] = fibOptimized(3) + fibOptimized(2) == 3
    // cache[3] = fibOptimized(2) + fibOptimized(1) == 2
    cache[n] = fibOptimized(n - 1) + fibOptimized(n - 2);
    return cache[n];
  }
}
