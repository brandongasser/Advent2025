import { Button, IndicatorLights, Machine } from '../common';
import { parse } from '../parser';
import * as Part1 from '../part-1';

const rawTestInput = `[.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {3,5,4,7}
[...#.] (0,2,3,4) (2,3) (0,4) (0,1,2) (1,2,3,4) {7,5,12,7,2}
[.###.#] (0,1,2,3,4) (0,3,4) (0,1,2,4,5) (1,2) {10,11,11,5,10,5}`;
const testInput = parse(rawTestInput, 1);

describe('Day 10 Part 1', () => {

  describe('part1', () => {

    it('should return the correct answer', () => {
      const actual = Part1.part1(testInput);

      expect(actual).toEqual(7);
    });

  });

  describe('pressButton', () => {

    it('should toggle relevant states when a button is pressed', () => {
      const initialState: IndicatorLights = ['.', '#', '#', '.'];
      const button: Button = [1, 3];
      const expected: IndicatorLights = ['.', '.', '#', '#'];

      const actual = Part1.pressButton(initialState, button);

      expect(actual).toEqual(expected);
    });

  });

  describe('solveMachine', () => {

    it('should return the minimum button presses for a machine', () => {
      const machine: Machine = {
        indicatorLights: ['.', '#', '#', '.'],
        buttons: [[3], [1, 3], [2], [2, 3], [0, 2], [0, 1]],
        joltage: [3, 5, 4, 7]
      }

      const actual = Part1.solveMachine(machine);

      expect(actual).toEqual(2);
    });

  });

});