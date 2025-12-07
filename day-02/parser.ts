import { IdRange } from "./common";

export function parse(input: string, part: number): IdRange[] {
  const ranges: IdRange[] = input.split(',').map(range => {
    const [start, end] = range.split('-').map(x => +x);
    return { start, end };
  });
  
  return ranges;
}