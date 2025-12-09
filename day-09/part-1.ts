export function part1(input: [number, number][]): number {
  let largest = 0;
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      largest = Math.max(largest, Math.abs(input[i][0] - input[j][0] + 1) * Math.abs(input[i][1] - input[j][1] + 1));
    }
  }
  return largest;
}