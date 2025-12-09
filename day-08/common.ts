export class Heap {

  private heap: [number, number, number][] = []; // box 1 id, box 2 id, distance

  constructor(private minHeap: boolean) {}

  push(element: [number, number, number]) {
    this.heap.push(element);

    let index = this.heap.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (parentIndex >= 0 && (this.minHeap ? this.heap[parentIndex][2] > element[2] : this.heap[parentIndex][2] < element[2])) {
      this.heap[index] = this.heap[parentIndex];
      this.heap[parentIndex] = element;

      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  pop(): [number, number, number] {
    const top = this.heap[0];

    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.length -= 1;

    let parentIndex = 0;
    let leftChildIndex = 0;
    let rightChildIndex = 0
    
    let nodeToSink = this.heap[parentIndex];
    let indexToSwap = 0;
    let swap = false;

    while (true) {
      leftChildIndex = (2 * parentIndex) + 1;
      rightChildIndex = (2 * parentIndex) + 2;

      swap = false;
      let leftChild = null;
      let rightChild = null;

      if (leftChildIndex < this.heap.length) {
        leftChild = this.heap[leftChildIndex];
        if (this.minHeap ? nodeToSink[2] > leftChild[2] : nodeToSink[2] < leftChild[2]) {
          indexToSwap = leftChildIndex;
          swap = true;
        }
      }

      if (rightChildIndex < this.heap.length) {
        rightChild = this.heap[rightChildIndex];
        if ((swap && (this.minHeap ? leftChild![2] > rightChild[2] : leftChild![2] < rightChild[2])) || (!swap && (this.minHeap ? nodeToSink[2] > rightChild[2] : nodeToSink[2] < rightChild[2]))) {
          indexToSwap = rightChildIndex;
          swap = true;
        }
      }

      if (!swap) {
        return top;
      } else {
        this.heap[parentIndex] = this.heap[indexToSwap];
        this.heap[indexToSwap] = nodeToSink;

        parentIndex = indexToSwap;
      }
    }
  }

  peek(): [number, number, number] {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  asList(): [number, number, number][] {
    return [...this.heap];
  }

}

export function replaceInList(list: number[], numToReplace: number, newNum: number) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === numToReplace) {
      list[i] = newNum;
    }
  }
}

export function groups(list: number[]): number[][] {
  const result: number[][] = [];
  let current: number[] = [];
  for (let num of list) {
    if (!current.length || current[0] === num) {
      current.push(num);
    } else {
      result.push(current);
      current = [num];
    }
  }
  result.push(current);
  return result;
}