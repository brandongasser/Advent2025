function bfs(current: string[], mappings: { [machine: string]: string[] }): number {
  if (current.filter(machine => machine !== 'out').length === 0) {
    return current.length;
  }

  const next = current.flatMap(machine => machine === 'out' ? ['out'] : mappings[machine]);

  return bfs(next, mappings);
}

export function part1(input: { [machine: string]: string[] }): number {
  return bfs(['you'], input);
}