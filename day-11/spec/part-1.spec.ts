import * as Part1 from '../part-1';
import { parse } from '../parser';

const rawTestInput = `aaa: you hhh
you: bbb ccc
bbb: ddd eee
ccc: ddd eee fff
ddd: ggg
eee: out
fff: out
ggg: out
hhh: ccc fff iii
iii: out`;
const testInput = parse(rawTestInput, 1);

describe('Day 11 Part 1', () => {

  describe('part1', () => {

    it('should return the correct answer', () => {
      const actual = Part1.part1(testInput);

      expect(actual).toEqual(5);
    });

  });

});