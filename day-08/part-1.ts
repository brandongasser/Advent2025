import { groups, Heap, replaceInList } from "./common";

export function findConnections(boxPositions: [number, number, number][], connectionCount: number): [number, number, number][] {
  const connections: Heap = new Heap(false);

  for (let i = 0; i < boxPositions.length - 1; i++) {
    for (let j = i + 1; j < boxPositions.length; j++) {
      const distanceSquared = Math.pow(boxPositions[i][0] - boxPositions[j][0], 2) + Math.pow(boxPositions[i][1] - boxPositions[j][1], 2) + Math.pow(boxPositions[i][2] - boxPositions[j][2], 2);

      if (connections.size() < connectionCount) {
        connections.push([i, j, distanceSquared]);
        continue;
      }

      if (connections.peek()[2] > distanceSquared) {
        connections.pop();
        connections.push([i, j, distanceSquared]);
      }
    }
  }

  return connections.asList();
}

export function part1(input: [number, number, number][], testMode=false): number {
  const connectionCount = testMode ? 10 : 1000;

  const connections = findConnections(input, connectionCount);

  const circuits: number[] = [];
  for (let i = 0; i < input.length; i++) {
    circuits.push(i);
  }
  for (let connection of connections) {
    replaceInList(circuits, circuits[connection[0]], circuits[connection[1]]);
  }

  circuits.sort();
  const circuitSizes = groups(circuits).map(group => group.length);

  circuitSizes.sort((a, b) => b - a);

  return circuitSizes[0] * circuitSizes[1] * circuitSizes[2];
}