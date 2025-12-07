import * as Part1 from '../part-1';
import { parse } from '../parser';
import { Move } from '../common';

const rawSampleInput = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;
const sampleInput = parse(rawSampleInput, 1);

describe('Day 1 Part 1', () => {

  describe('part1', () => {

    it('should return the correct answer', () => {
      const expected = 3;

      const actual = Part1.part1(sampleInput);

      expect(actual).toEqual(expected);
    });

  });

  describe('executeMove', () => {

    it('should execute a left move', () => {
      const move: Move = { direction: 'left', distance: 10 };
      const actual = Part1.executeMove(55, move);

      const expected = 45;

      expect(actual).toEqual(expected);
    });

    it('should execute a right move', () => {
      const move: Move = { direction: 'right', distance: 10 };
      const actual = Part1.executeMove(55, move);

      const expected = 65;

      expect(actual).toEqual(expected);
    });

    it('should execute a left move over zero', () => {
      const move: Move = { direction: 'left', distance: 1 };
      const actual = Part1.executeMove(0, move);

      const expected = 99;

      expect(actual).toEqual(expected);
    });

    it('should execute a right move over zero', () => {
      const move: Move = { direction: 'right', distance: 1 };
      const actual = Part1.executeMove(99, move);

      const expected = 0;

      expect(actual).toEqual(expected);
    });

  });
  
});