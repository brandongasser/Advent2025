function bfs(current: { [machine: string]: number }, endPoint: string, mappings: { [machine: string]: string[] }): number {
  if (endPoint !== 'out') {
    delete current.out;
  }

  if (Object.keys(current).filter(machine => machine !== endPoint).length === 0) {
    return current[endPoint];
  }

  const next: { [machine: string]: number } = {};
  next[endPoint] = current[endPoint] || 0;
  for (let machine of Object.keys(current)) {
    if (machine === endPoint) {
      continue;
    }
    for (let nextMachine of mappings[machine]) {
      const count = next[nextMachine] ? next[nextMachine] + current[machine] : current[machine];
      next[nextMachine] = count;
    }
  }

  return bfs(next, endPoint, mappings);
}

export function pathCount(startPoint: string, endPoint: string, mappings: { [machine: string]: string[] }): number {
  const initialState: { [machine: string]: number } = {};
  initialState[startPoint] = 1;
  return bfs(initialState, endPoint, mappings);
}

export function part2(input: { [machine: string]: string[] }): number {
  return (
    pathCount('svr', 'fft', input) *
    pathCount('fft', 'dac', input) *
    pathCount('dac', 'out', input)
  ) + (
    pathCount('svr', 'dac', input) *
    pathCount('dac', 'fft', input) *
    pathCount('fft', 'out', input)
  );
}