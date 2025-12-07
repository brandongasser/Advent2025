import { factors, fold, sum } from "../utils/utils";
import { expandRange, IdRange } from "./common";

export function makeGroups(str: string, len: number): string[] {
  const result: string[] = [];
  let temp = str;

  while (temp.length) {
    result.push(temp.slice(0, len));
    temp = temp.slice(len);
  }

  return result;
}

export function isInvalidId(id: number): boolean {
  const strId = id.toString();

  const substringLengthsToCheck = factors(strId.length).filter(x => x <= strId.length / 2);

  for (let len of substringLengthsToCheck) {
    const groups = makeGroups(strId, len);

    if (!fold(groups, (acc, group) => acc || groups[0] !== group, false)) {
      return true;
    }
  }

  return false;
}

export function part2(input: IdRange[]): number {
  const idCandidates = input.flatMap(idRange => expandRange(idRange.start, idRange.end));
  
    const invalidIds = idCandidates.filter(isInvalidId);
  
    return sum(invalidIds);
}