const BubbleSort = (array) => {
  let animations = [];
  let swap = false;
  for (let i = 0; i < array.length - 1; i++) {
    swap = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      animations.push([j, j + 1, 1]);
      animations.push([j, j + 1, 2]);

      if (array[j] > array[j + 1]) {
        animations.push([j, array[j + 1], 0]);
        animations.push([j + 1, array[j], 0]);
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        swap = true;
      }
    }
    if (!swap) break;
  }
  return animations;
};
export default BubbleSort;
