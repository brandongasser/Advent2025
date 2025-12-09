export function parse(input: string, part: number): [number, number, number][] {
  return input.split('\n').map(line => line.split(',').map(x => +x) as [number, number, number]);
}