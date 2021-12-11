const minMaxFinder = (arr) => {
  const len = arr.length;
  let min = Infinity;
  let max = -Infinity;
  let minIndex;
  let maxIndex;

  if (arr.length % 2) {
    [min] = arr;
    [max] = arr;
    minIndex = 0;
    maxIndex = 0;
  }

  for (let i = len % 2 ? 1 : 0; i < len; i += 2) {
    if (arr[i] < arr[i + 1]) {
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
      if (arr[i + 1] > max) {
        max = arr[i + 1];
        maxIndex = i + 1;
      }
    } else {
      if (arr[i + 1] < min) {
        min = arr[i + 1];
        minIndex = i + 1;
      }
      if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
      }
    }
  }
  return { min, minIndex, max, maxIndex };
};

export default minMaxFinder;
