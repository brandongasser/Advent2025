import { sum } from "../utils/utils";
import { IdRange, expandRange } from "./common";

export function isInvalidId(id: number): boolean {
  const strId = id.toString();

  if (strId.length % 2 === 1) {
    return false;
  }

  return strId.slice(0, strId.length / 2) === strId.slice(strId.length / 2);
}

export function part1(input: IdRange[]): number {
  const idCandidates = input.flatMap(idRange => expandRange(idRange.start, idRange.end));

  const invalidIds = idCandidates.filter(isInvalidId);

  return sum(invalidIds);
}