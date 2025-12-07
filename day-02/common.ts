export type IdRange = {
  start: number,
  end: number
};

export function expandRange(start: number, end: number): number[] {
  const result: number[] = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}