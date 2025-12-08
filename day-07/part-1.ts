import { MapSpace } from "./common";

export function moveBeams(currentRow: MapSpace[], rowToChange: MapSpace[]): number {
  let splitCount = 0;
  for (let i = 0; i < currentRow.length; i++) {
    if (currentRow[i] === 'beam') {
      if (rowToChange[i] === 'splitter') {
        rowToChange[i - 1] = 'beam';
        rowToChange[i + 1] = 'beam';
        splitCount++;
      } else {
        rowToChange[i] = 'beam';
      }
    }
  }
  return splitCount;
}

export function part1(input: MapSpace[][]): number {
  let splitCount = 0;
  for (let i = 0; i < input.length - 1; i++) {
    splitCount += moveBeams(input[i], input[i + 1]);
  }
  return splitCount;
}