import { sum } from "../utils/utils";
import { largestJoltage } from './common';

// export function largestJoltage(bank: number[]): number {
//   function findLargestJoltage(subBank: number[], choicesLeft: number): number {
//     if (choicesLeft === 0) {
//       return 0;
//     }
//     const choice = Math.max(...subBank.slice(0, subBank.length - choicesLeft + 1));

//     return choice * Math.pow(10, choicesLeft - 1) + findLargestJoltage(subBank.slice(subBank.indexOf(choice) + 1), choicesLeft - 1);
//   }

//   return findLargestJoltage(bank, 12);
// }

export function part2(input: number[][]): number {
  return sum(input.map(bank => largestJoltage(bank, 12)));
}