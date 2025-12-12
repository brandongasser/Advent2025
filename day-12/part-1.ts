import { sum, zipWith } from "../utils/utils";

export function part1(input: { sizes: number[], regions: { area: number, counts: number[] }[] }): number {
  let count = 0;
  for (let region of input.regions) {
    if (region.area < sum(zipWith(input.sizes, region.counts, (a, b) => a * b))) {
      continue;
    }
    count++;
  }

  return count;
}