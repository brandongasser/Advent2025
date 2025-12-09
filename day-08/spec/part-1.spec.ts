import * as Part1 from '../part-1';
import { parse } from '../parser';

const rawTestInput = `162,817,812
57,618,57
906,360,560
592,479,940
352,342,300
466,668,158
542,29,236
431,825,988
739,650,466
52,470,668
216,146,977
819,987,18
117,168,530
805,96,715
346,949,466
970,615,88
941,993,340
862,61,35
984,92,344
425,690,689`;
const testInput = parse(rawTestInput, 1);

describe('Day 8 Part 1', () => {

  describe('part1', () => {

    it('should return the correct answer', () => {
      const actual = Part1.part1(testInput, true);

      expect(actual).toEqual(40);
    });

  });

  describe('findConnections', () => {

    it('should return the smallest connections', () => {
      const expected = [
        [0, 19],
        [0, 7],
        [2, 13]
      ];

      const connections = Part1.findConnections(testInput, 3);

      const actual = connections.map(connection => [connection[0], connection[1]]);

      actual.sort();
      expected.sort();
      expect(actual).toEqual(expected);
    });

  });

  describe('replaceInList', () => {

    it('should replace all instances of a number with the new number', () => {
      const listToChange = [4, 7, 89, 4, 6, 8, 3];

      const expected = [8, 7, 89, 8, 6, 8, 3];

      Part1.replaceInList(listToChange, 4, 8);

      expect(listToChange).toEqual(expected);
    });

  });

  describe('groups', () => {

    it('should return the groups of numbers', () => {
      const listToGroup = [1, 1, 5, 6, 6, 6, 8, 9, 9, 652, 652];
      const expected = [[1, 1], [5], [6, 6, 6], [8], [9, 9], [652, 652]];

      const actual = Part1.groups(listToGroup);

      expect(actual).toEqual(expected);
    });

  });

});