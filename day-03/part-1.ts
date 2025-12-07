import { sum } from "../utils/utils";
import { largestJoltage } from "./common";

// export function largestJoltage(bank: number[]): number {
//   let startNumber = 9;
//   while (!bank.slice(0, bank.length - 1).includes(startNumber)) {
//     startNumber--;
//   }

//   let secondNumber = 1;
//   for (let i = bank.indexOf(startNumber) + 1; i < bank.length; i++) {
//     secondNumber = Math.max(secondNumber, bank[i]);
//   }

//   return 10 * startNumber + secondNumber;
// }

export function part1(input: number[][]): number {
  return sum(input.map(bank => largestJoltage(bank, 2)));
}