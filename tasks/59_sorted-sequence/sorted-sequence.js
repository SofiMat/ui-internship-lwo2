export function uniteUnique(arr1, arr2, arr3) {
  let finalArray = [];
  for (let i = 0; i < arguments.length; i++) {
    /* eslint-disable-next-line */
    let arrayArguments = arguments[i];
    const leng = arrayArguments.length;
    for (let j = 0; j < leng; j++) {
      let indexValue = arrayArguments[j];
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }
  return finalArray;
}
