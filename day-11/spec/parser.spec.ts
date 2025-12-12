import * as Parser from '../parser';

describe('Day 11 Parser', () => {

  describe('parse', () => {

    it('should parse the input for part 1', () => {
      const testInput = `bbb: ddd eee
ccc: ddd eee fff
ddd: ggg`;
      const expected = {
        'bbb': ['ddd', 'eee'],
        'ccc': ['ddd', 'eee', 'fff'],
        'ddd': ['ggg']
      };

      const actual = Parser.parse(testInput, 1);

      expect(actual).toEqual(expected);
    });

    it('should parse the input for part 2', () => {
      const testInput = `bbb: ddd eee
ccc: ddd eee fff
ddd: ggg`;
      const expected = {
        'bbb': ['ddd', 'eee'],
        'ccc': ['ddd', 'eee', 'fff'],
        'ddd': ['ggg']
      };

      const actual = Parser.parse(testInput, 2);

      expect(actual).toEqual(expected);
    });

  });

});