import { Move } from "./common";

export function executeMove(current: number, move: Move): number {
  let distance = move.distance;
  if (move.direction === 'left') {
    distance *= -1;
  }

  return (current + distance + 100) % 100;
}

export function part1(input: Move[]): number {
  let count = 0;
  let current = 50;
  for (let move of input) {
    current = executeMove(current, move);

    if (current === 0) {
      count++;
    }
  }

  return count;
}