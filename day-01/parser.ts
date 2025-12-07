import { Move } from "./common";

export function parse(input: string, part: number): Move[] {
  return input.split('\n').map(str => ({
    direction: str.charAt(0) === 'R' ? 'right' : 'left',
    distance: +str.slice(1)
  }));
}