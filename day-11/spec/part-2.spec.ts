import { parse } from '../parser';
import * as Part2 from '../part-2';

const rawTestInput = `svr: aaa bbb
aaa: fft
fft: ccc
bbb: tty
tty: ccc
ccc: ddd eee
ddd: hub
hub: fff
eee: dac
dac: fff
fff: ggg hhh
ggg: out
hhh: out`;
const testInput = parse(rawTestInput, 2);

describe('Day 11 Part 2', () => {

  describe('part2', () => {

    fit('should return the correct answer for part 2', () => {
      const actual = Part2.part2(testInput);

      expect(actual).toEqual(2);
    });

  });

});