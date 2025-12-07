import { neighbors } from './common';

export function part1(input: string[]): number {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === '@' && neighbors(input, i, j).filter(x => x === '@').length < 4) {
        count++;
      }
    }
  }
  return count;
}