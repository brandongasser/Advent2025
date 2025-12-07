import { Move } from "./common";

export function executeMove(current: number, move: Move): { next: number, zeroCount: number } {
  let distance = move.distance;
  if (move.direction === 'left') {
    distance *= -1;
  }

  const next = (current + (distance % 100 + 100)) % 100;

  const passedZero = current !== 0 && (move.direction === 'right' ? current + (move.distance % 100) > 99 : current - (move.distance % 100) <= 0);
  const zeroCount = Math.floor(move.distance / 100) + (passedZero ? 1 : 0);

  return { next, zeroCount };
}

export function part2(input: Move[]): number {
  let count = 0;
  let current = 50;
  for (let move of input) {
    const result = executeMove(current, move);
    current = result.next;

    count += result.zeroCount;
  }

  return count;
}