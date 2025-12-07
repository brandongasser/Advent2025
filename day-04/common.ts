export function neighbors(map: string[], row: number, col: number): string[] {
  const result: string[] = [];

  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      if (i === row && col === j) {
        continue;
      }

      if (i >= 0 && i < map.length && j >= 0 && j < map[0].length) {
        result.push(map[i][j]);
      }
    }
  }

  return result;
}

export function convertToAdjacentCountMap(map: string[]): number[][] {
  const result: number[][] = [];
  for (let i = 0; i < map.length; i++) {
    const row: number[] = [];
    for (let j = 0; j < map[0].length; j++) {
      row.push(map[i][j] === '@' ? neighbors(map, i, j).filter(c => c === '@').length : 1000000);
    }
    result.push(row);
  }
  return result;
}