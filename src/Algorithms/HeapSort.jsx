let arrLength;
function maxHeap(input, i, animations) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let max = i;

  if (left < arrLength && input[left] > input[max]) {
    max = left;
  }

  if (right < arrLength && input[right] > input[max]) {
    max = right;
  }

  if (max !== i) {
    swap(input, i, max, animations);
    maxHeap(input, max, animations);
  }
}

function swap(input, indexA, indexB, animations) {
  animations.push([indexA, indexB, 0]);
  animations.push([indexA, indexB, 1]);
  animations.push([indexA, input[indexB], 2]);
  animations.push([indexB, input[indexA], 2]);

  const temp = input[indexA];

  input[indexA] = input[indexB];
  input[indexB] = temp;
}

export function HeapSort(input) {
  let animations = [];
  arrLength = input.length;

  for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1) {
    maxHeap(input, i, animations);
  }

  for (let i = input.length - 1; i > 0; i--) {
    swap(input, 0, i, animations);
    arrLength--;
    maxHeap(input, 0, animations);
  }
  return animations;
}
