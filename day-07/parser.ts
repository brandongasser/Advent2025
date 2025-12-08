import { MapSpace } from "./common";

export function parse(input: string, part: number): MapSpace[][] {
  return input.split('\n').map(row => row.split('').map(x => {
    switch (x) {
      case '.':
        return 'empty';
      case '^':
        return 'splitter';
      case 'S':
        return 'beam';
      default:
        return 'empty';
    }
  }));
}