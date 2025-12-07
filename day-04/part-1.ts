import { sum } from '../utils/utils';
import { convertToAdjacentCountMap } from './common';

export function part1(input: string[]): number {
  const adjacentCountMap = convertToAdjacentCountMap(input);

  return sum(adjacentCountMap.map(line => line.filter(n => n < 4).length));
}