export const HeapSort = (array) => {
  const animations = [];
  sort(animations, 0, array.length - 1, array);
  return animations;
};
const sort = (
  animations,
  i,
  j,
  arr //O(n log n)
) => {
  if (j === 0) return;
  heapify(animations, j, arr);
  animations.push([i, j, 0]);
  animations.push([i, j, 1]);
  animations.push([i, arr[j], 2]);
  animations.push([j, arr[i], 2]);
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  sort(animations, i, j - 1, arr);
};

const heapify = (animations, j, arr) => {
  //O(n)

  for (let k = j; k >= 0; k--) {
    if (k * 2 + 1 > j) {
      continue;
    }
    if (k * 2 + 2 <= j) {
      if (arr[k * 2 + 2] > arr[k * 2 + 1]) {
        if (arr[k] < arr[k * 2 + 2]) {
          animations.push([k, k * 2 + 2, 0]);
          animations.push([k, k * 2 + 2, 1]);

          animations.push([k, arr[k * 2 + 2], 2]);
          animations.push([k * 2 + 2, arr[k], 2]);

          let temp = arr[k];
          arr[k] = arr[k * 2 + 2];
          arr[k * 2 + 2] = temp;
        }
      } else {
        if (arr[k] < arr[k * 2 + 1]) {
          animations.push([k, k * 2 + 1, 0]);
          animations.push([k, k * 2 + 1, 1]);
          animations.push([k, arr[k * 2 + 1], 2]);
          animations.push([k * 2 + 1, arr[k], 2]);
          let temp = arr[k];
          arr[k] = arr[k * 2 + 1];
          arr[k * 2 + 1] = temp;
        }
      }
    }
  }
};
