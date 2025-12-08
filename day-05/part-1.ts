import { IdRange } from "./common";

export function isFresh(freshIdRanges: IdRange[], id: number): boolean {
  for (let range of freshIdRanges) {
    if (range.start <= id && range.end >= id) {
      return true;
    }
  }
  return false;
}

export function part1(input: { freshIdRanges: IdRange[], ids: number[] }): number {
  return input.ids.filter(id => isFresh(input.freshIdRanges, id)).length;
}