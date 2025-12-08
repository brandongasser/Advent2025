import { IdRange } from "./common";
import { fold } from "../utils/utils";

export function combineRanges(range1: IdRange, range2: IdRange): IdRange[] {
  if (range1.end + 1 < range2.start || range2.end + 1 < range1.start) {
    return [range1, range2];
  }

  return [{ start: Math.min(range1.start, range2.start), end: Math.max(range1.end, range2.end) }];
}

export function addRangeToRangeList(ranges: IdRange[], rangeToAdd: IdRange): IdRange[] {
  if (ranges.length === 0) {
    return [rangeToAdd];
  }

  const result = [];
  let combinedRange = rangeToAdd;
  for (let range of ranges) {
    const newRanges = combineRanges(range, combinedRange);
    if (newRanges.length === 2) {
      result.push(range);
    } else {
      combinedRange = newRanges[0];
    }
  }
  result.push(combinedRange);

  return result;
}

export function part2(input: { freshIdRanges: IdRange[], ids: number[] }): number {
  const combinedRanges = fold(input.freshIdRanges, (combinedRanges, rangeToAdd) => addRangeToRangeList(combinedRanges, rangeToAdd), [] as IdRange[]);

  let result = 0;
  for (let range of combinedRanges) {
    result += range.end - range.start + 1;
  }

  return result;
}