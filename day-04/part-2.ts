import { convertToAdjacentCountMap } from "./common";

export function remove(adjacentCountMap: number[][], row: number, col: number) {
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      if (i === row && j === col) {
        adjacentCountMap[i][j] = 1000000;
      }
      if (i >= 0 && i < adjacentCountMap.length && j >= 0 && j < adjacentCountMap[0].length) {
        adjacentCountMap[i][j]--;
      }
    }
  }
}

export function part2(input: string[]): number {
  let current: number[][] = convertToAdjacentCountMap(input);
  let next: number[][];

  let totalChanges = 0;
  let currentChanges = -1;
  
  while (currentChanges !== 0) {
    currentChanges = 0;
    next = current.map(line => [...line]);
    for (let i = 0; i < current.length; i++) {
      for (let j = 0; j < current.length; j++) {
        if (current[i][j] < 4) {
          remove(next, i, j);
          currentChanges++;
        }
      }
    }
    totalChanges += currentChanges;
    current = next;
  }

  return totalChanges;
}