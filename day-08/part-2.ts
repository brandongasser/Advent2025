import { Heap, replaceInList } from "./common";

export function findConnections(boxPositions: [number, number, number][]): Heap {
  const heap = new Heap(true);

  for (let i = 0; i < boxPositions.length - 1; i++) {
    for (let j = i + 1; j < boxPositions.length; j++) {
      const distanceSquared = Math.pow(boxPositions[i][0] - boxPositions[j][0], 2) + Math.pow(boxPositions[i][1] - boxPositions[j][1], 2) + Math.pow(boxPositions[i][2] - boxPositions[j][2], 2);

      heap.push([i, j, distanceSquared]);
    }
  }

  return heap;
}

export function allSame(circuits: number[]) {
  for (let i = 0; i < circuits.length - 1; i++) {
    if (circuits[i] !== circuits[i + 1]) {
      return false;
    }
  }
  return true;
}

export function part2(input: [number, number, number][]): number {
  const connectionsHeap = findConnections(input);

  const circuits: number[] = [];
  for (let i = 0; i < input.length; i++) {
    circuits.push(i);
  }

  let connection: [number, number, number] = [0, 0, 0];
  while (!allSame(circuits)) {
    connection = connectionsHeap.pop();
    replaceInList(circuits, circuits[connection[0]], circuits[connection[1]]);
  }

  return input[connection[0]][0] * input[connection[1]][0];
}