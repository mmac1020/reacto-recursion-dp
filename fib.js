function fibNaive(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibNaive(n - 1) + fibNaive(n - 2);
  }
}

let cache = {};

function fibOptimized(n) {
  if (cache[n]) {
    return cache[n];
  } else if (n <= 2) {
    return 1;
  } else {
    cache[n] = fibOptimized(n - 1, cache) + fibOptimized(n - 2, cache);
    return cache[n];
  }
}
