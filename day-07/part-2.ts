import { sum } from "../utils/utils";
import { MapSpace } from "./common";

export function moveBeams(topRow: (number | 'splitter')[], bottomRow: (number | 'splitter')[]) {
  for (let i = 0; i < topRow.length; i++) {
    if (topRow[i] !== 'splitter' && topRow[i] as number > 0) {
      if (bottomRow[i] === 'splitter') {
        bottomRow[i - 1] = (bottomRow[i - 1] as number) + (topRow[i] as number);
        bottomRow[i + 1] = (bottomRow[i + 1] as number) + (topRow[i] as number);
      } else {
        bottomRow[i] = (bottomRow[i] as number) + (topRow[i] as number);
      }
    }
  }
}

export function part2(input: MapSpace[][]): number {
  const adjustedMap: (number | 'splitter')[][] = input.map(row => row.map(x => {
    switch (x) {
      case 'empty':
        return 0;
      case 'beam':
        return 1;
      case 'splitter':
        return 'splitter';
      default:
        return 0;
    }
  }));

  for (let i = 0; i < adjustedMap.length - 1; i++) {
    moveBeams(adjustedMap[i], adjustedMap[i + 1]);
  }

  return sum(adjustedMap[adjustedMap.length - 1].filter(x => x !== 'splitter'));
}