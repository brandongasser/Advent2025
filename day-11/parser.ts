export function parse(input: string, part: number): { [device: string]: string[] } {
  const machines = input.split('\n').map(line => {
    const parts = line.split(' ');
    return [parts[0].slice(0, 3), parts.slice(1)] as [string, string[]];
  });

  const result: { [device: string]: string[] } = {};
  for (let machine of machines) {
    result[machine[0]] = machine[1];
  }

  return result;
}