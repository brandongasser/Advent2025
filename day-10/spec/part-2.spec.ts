import * as Part2 from '../part-2';
import { parse } from '../parser';
import { Machine } from '../common';

const rawTestInput = `[.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {3,5,4,7}
[...#.] (0,2,3,4) (2,3) (0,4) (0,1,2) (1,2,3,4) {7,5,12,7,2}
[.###.#] (0,1,2,3,4) (0,3,4) (0,1,2,4,5) (1,2) {10,11,11,5,10,5}`;
const testInput = parse(rawTestInput, 2);

describe('Day 10 Part 2', () => {

  describe('part2', () => {

    it('should return the correct answer', () => {
      const actual = Part2.part2(testInput);

      expect(actual).toEqual(33);
    });

  });

  describe('solveMachine', () => {

    fit('shold return the minimum button presses for a machine', () => {
      const machine: Machine = {
        indicatorLights: ['.', '#', '#', '.'],
        buttons: [[3], [1, 3], [2], [2, 3], [0, 2], [0, 1]],
        joltage: [3, 5, 4, 7]
      }

      const actual = Part2.solveMachine(machine);

      expect(actual).toEqual(10);
    });

  });

});