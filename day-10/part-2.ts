import { sum, zipWith } from "../utils/utils";
import { Button, Machine } from "./common";

export function identityMatrix(order: number): number[][] {
  const matrix: number[][] = [];
  
  for (let i = 0; i < order; i++) {
    const row: number[] = [];
    for (let j = 0; j < order; j++) {
      row.push(i === j ? 1 : 0);
    }
    matrix.push(row);
  }

  return matrix;
}

export function swapRows(matrix: number[][], rowA: number, rowB: number) {
  const temp = matrix[rowA];
  matrix[rowA] = matrix[rowB];
  matrix[rowB] = temp;
}

export function scaleRow(matrix: number[][], row: number, scalar: number) {
  for (let i = 0; i < matrix[row].length; i++) {
    matrix[row][i] *= scalar;
  }
}

export function addRows(matrix: number[][], targetRow: number, otherRow: number, scalar: number) {
  for (let i = 0; i < matrix[targetRow].length; i++) {
    matrix[targetRow][i] += matrix[otherRow][i] * scalar;
  }
}

export function findInverse(matrix: number[][]): number[][] {
  const inverse = identityMatrix(matrix.length);

  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[j][j] === 0) {
      for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][j] !== 0) {
          swapRows(matrix, i, j);
          swapRows(inverse, i, j);
        }
      }
    }
    scaleRow(matrix, j, 1 / matrix[j][j]);
    scaleRow(inverse, j, 1 / matrix[j][j]);
    for (let i = 0; i < matrix.length; i++) {
      if (i === j) {
        continue;
      }
      addRows(matrix, i, j, -matrix[i][j]);
      addRows(inverse, i, j, -matrix[i][j]);
    }
  }

  return inverse;
}

export function buildMatrix(machine: Machine): number[][] {
  const matrix: number[][] = [];

  for (let i = 0; i < Math.max(machine.buttons.length, machine.joltage.length); i++) {
    const row: number[] = [];
    for (let j = 0; j < Math.max(machine.buttons.length, machine.joltage.length); j++) {
      if (machine.buttons.length < i || machine.joltage.length < i) {
        row.push(0);
      } else {
        if (machine.buttons[j].includes(i)) {
          row.push(1);
        } else {
          row.push(0);
        }
      }
    }
    matrix.push(row);
  }

  console.log(matrix);

  return matrix;
}

export function solveMachine(machine: Machine): number {
  const matrix = buildMatrix(machine);
  const inverse = findInverse(matrix);

  console.log(inverse);

  let result = 0;
  for (let i = 0; i < inverse.length; i++) {
    for (let j = 0; j < inverse.length; j++) {
      result += inverse[i][j] * (machine.joltage[j] ? machine.joltage[j] : 0);
    }
  }

  return result;
}

export function part2(input: Machine[]): number {
  return sum(input.map(solveMachine));
}