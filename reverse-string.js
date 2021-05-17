// test string
// first go through:
// g + reverseRecurive(test strin)
// second go through
// gn + reverseRecursive(test stri)
const reverseRecursive = (str) => {
  if (str === '') {
    return '';
  } else {
    let lastIdx = str.length - 1;
    return str[lastIdx] + reverseRecursive(str.substring(0, lastIdx));
  }
};

const reverseIterative = (str) => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

console.log(reverseIterative('Hello Dolly'));
console.log(reverseRecursive('Goodbye Blue Monday'));
