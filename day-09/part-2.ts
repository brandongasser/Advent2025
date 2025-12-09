import { Heap } from "./common";

export function checkHorizontalEdge(edges: [[number, number], [number, number]][], startX: number, endX: number, y: number): boolean {
  const verticalEdges = edges.filter(edge => edge[0][0] === edge[1][0]);

  let topInside = false;
  let bottomInside = false;
  for (let i = 0; i <= endX; i++) {
    const relevantEdges = verticalEdges.filter(edge => edge[0][0] === i);

    let out = false;
    if (i >= startX && !topInside && !bottomInside) {
      out = true;
    }

    if (relevantEdges.filter(edge => Math.min(edge[0][1], edge[1][1]) <= y + 0.5 && Math.max(edge[0][1], edge[1][1]) >= y + 0.5).length) {
      topInside = !topInside;
    }

    if (relevantEdges.filter(edge => Math.min(edge[0][1], edge[1][1]) <= y - 0.5 && Math.max(edge[0][1], edge[1][1]) >= y - 0.5).length) {
      bottomInside = !bottomInside;
    }

    if (i >= startX && !topInside && !bottomInside && out) {
      return false;
    }
  }
  
  return true;
}

export function checkVerticalEdge(edges: [[number, number], [number, number]][], startY: number, endY: number, x: number): boolean {
  const horizontalEdges = edges.filter(edge => edge[0][1] === edge[1][1]);

  let rightInside = false;
  let leftInside = false;
  for (let i = 0; i <= endY; i++) {
    const relevantEdges = horizontalEdges.filter(edge => edge[0][1] === i);

    let out = false;
    if (i >= startY && !rightInside && !leftInside) {
      out = true;
    }

    if (relevantEdges.filter(edge => Math.min(edge[0][0], edge[1][0]) <= x + 0.5 && Math.max(edge[0][0], edge[1][0]) >= x + 0.5).length) {
      rightInside = !rightInside;
    }

    if (relevantEdges.filter(edge => Math.min(edge[0][0], edge[1][0]) <= x - 0.5 && Math.max(edge[0][0], edge[1][0]) >= x - 0.5).length) {
      leftInside = !leftInside;
    }

    if (i >= startY && !rightInside && !leftInside && out) {
      return false;
    }
  }
  
  return true;
}

export function isValidRectangle(tiles: [number, number][], tileAIndex: number, tileBIndex: number): boolean {
  const edges: [[number, number], [number, number]][] = [];
  for (let i = 0; i < tiles.length - 1; i++) {
    edges.push([tiles[i], tiles[i + 1]]);
  }
  edges.push([tiles[tiles.length - 1], tiles[0]]);

  const tileA = tiles[tileAIndex];
  const tileB = tiles[tileBIndex];

  return checkHorizontalEdge(edges, Math.min(tileA[0], tileB[0]), Math.max(tileA[0], tileB[0]), tileA[1]) &&
      checkHorizontalEdge(edges, Math.min(tileA[0], tileB[0]), Math.max(tileA[0], tileB[0]), tileB[1]) &&
      checkVerticalEdge(edges, Math.min(tileA[1], tileB[1]), Math.max(tileA[1], tileB[1]), tileA[0]) &&
      checkVerticalEdge(edges, Math.min(tileA[1], tileB[1]), Math.max(tileA[1], tileB[1]), tileB[0]);
}

export function compress(tiles: [number, number][]): [number, number][] {
  const xMapping: { [beforeCompression: number]: number } = {};
  const yMapping: { [beforeCompression: number]: number } = {};

  const tilesCopy = [...tiles];

  tilesCopy.sort((a, b) => a[0] - b[0]);
  let current = 0;
  for (let tile of tilesCopy) {
    if (xMapping[tile[0]] === undefined) {
      xMapping[tile[0]] = current;
      current++;
    }
  }

  tilesCopy.sort((a, b) => a[1] - b[1]);
  current = 0;
  for (let tile of tilesCopy) {
    if (yMapping[tile[1]] === undefined) {
      yMapping[tile[1]] = current;
      current++;
    }
  }

  return tiles.map(tile => [xMapping[tile[0]], yMapping[tile[1]]]);
}

export function part2(input: [number, number][]): number {
  const compressedTiles = compress(input);

  const rectangleHeap = new Heap(false);
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      rectangleHeap.push([i, j, (Math.abs(input[i][0] - input[j][0]) + 1) * (Math.abs(input[i][1] - input[j][1]) + 1)]);
    }
  }

  while (true) {
    const rectangle = rectangleHeap.pop();

    if (isValidRectangle(compressedTiles, rectangle[0], rectangle[1])) {
      return rectangle[2];
    }
  }
}