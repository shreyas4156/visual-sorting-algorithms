export const HeapSort = (array) => {
  const animations = [];
  sort(animations, 0, array.length, array);
  return animations;
};
const sort = (
  animations,
  i,
  n,
  arr //O(n log n)
) => {
  for (let i = n / 2 - 1; i >= 0; i--) heapify(animations, arr, n, i);

  for (let i = n - 1; i > 0; i--) {
    animations.push([0, i, 0]);
    animations.push([0, i, 1]);
    animations.push([0, arr[i], 2]);
    animations.push([i, arr[0], 2]);
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapify(animations, arr, i, 0);
  }
};

const heapify = (animations, arr, n, i) => {
  //O(n)

  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  if (l < n && arr[l] > arr[largest]) largest = l;
  if (r < n && arr[r] > arr[largest]) largest = r;

  if (largest !== i) {
    animations.push([i, largest, 0]);
    animations.push([i, largest, 1]);
    animations.push([i, arr[largest], 2]);
    animations.push([largest, arr[i], 2]);
    let swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;

    heapify(animations, arr, n, largest);
  }
};
