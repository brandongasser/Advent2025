export function parse(input: string, part: number): number[][] {
  return input.split('\n').map(bank => bank.split('').map(battery => +battery));
}