module.exports = function check(str, bracketsConfig) {
  // your solution
  let strArr = str.split('');
  let countJ = 0;
  let count = Math.floor(str.length / bracketsConfig.length);

  do {
    for (let j = 0; j < bracketsConfig.length; j++) {
      for (let i = 0; i < str.length; i++) {
        let k = i + 1;
        if (strArr[i] === bracketsConfig[j][0] && strArr[k] === bracketsConfig[j][1]) {
          strArr.splice(i, 2);
          k = 0;
          i = 0;
          continue;
        }
      }
    }
    countJ += 1;
    if (countJ - 1 === count) {
      break;
    }
  } while (strArr.length > 0 || countJ - 1 === count);

  if (strArr.length === 0) {
    return true;
  } else {
    return false;
  }
}
