import { zipWith, sum } from "../utils/utils";

export function part1(input: { columns: number[][], functions: ((a: number, b: number) => number)[] }): number {
  return sum(zipWith(input.columns, input.functions, (col, f) => col.reduce(f)));
}