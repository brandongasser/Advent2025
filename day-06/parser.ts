import { transpose } from "../utils/utils";

function part1(input: string): { columns: number[][], functions: ((a: number, b: number) => number)[] } {
  const lines = input.split('\n');
  
  const columns = transpose(lines.slice(0, lines.length - 1).map(line => line.split(' ').filter(x => x.length).map(x => +x)));

  const functions: ((a: number, b: number) => number)[] = lines[lines.length - 1].split(' ').filter(x => x.length).map(symbol => {
    return symbol === '*' ? (a, b) => a * b : (a, b) => a + b;
  });

  return { columns, functions };
}

function part2(input: string): { columns: number[][], functions: ((a: number, b: number) => number)[] } {
  const lines = input.split('\n');

  const nums = transpose(lines.slice(0, lines.length - 1).map(line => line.split(''))).map(x => x.join(''));
  
  const columns: number[][] = [];
  let current: number[] = [];
  for (let num of nums) {
    if (num.trim().length) {
      current.push(+num);
    } else {
      columns.push(current);
      current = [];
    }
  }
  columns.push(current);

  const functions: ((a: number, b: number) => number)[] = lines[lines.length - 1].split(' ').filter(x => x.length).map(symbol => {
    return symbol === '*' ? (a, b) => a * b : (a, b) => a + b;
  });

  return { columns, functions };
}

export function parse(input: string, part: number): { columns: number[][], functions: ((a: number, b: number) => number)[] } {
  return part === 1 ? part1(input) : part2(input);
}