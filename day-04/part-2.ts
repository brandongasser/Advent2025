import { neighbors } from "./common";

export function part2(input: string[]): number {
  let current: string[][] = input.map(line => line.split(''));
  let next: string[][];

  let totalChanges = 0;
  let currentChanges = -1;

  while (currentChanges !== 0) {
    currentChanges = 0;
    next = current.map(line => [...line]);
    for (let i = 0; i < current.length; i++) {
      for (let j = 0; j < current.length; j++) {
        if (current[i][j] === '@' && neighbors(current.map(line => line.join('')), i, j).filter(x => x === '@').length < 4) {
          next[i][j] = '.';
          currentChanges++;
        }
      }
    }
    totalChanges += currentChanges;
    current = next;
  }

  return totalChanges;
}