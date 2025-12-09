import * as Common from '../common';

describe('Day 8 Common', () => {

  describe('Heap', () => {

    describe('push', () => {

      it('should push a new element to the heap', () => {
        const heap = new Common.Heap(false);

        heap.push([1, 1, 4]);
        heap.push([1, 1, 3]);
        heap.push([1, 1, 5]);
        heap.push([1, 1, 6]);

        const actual = heap.asList();

        const expected: [number, number, number][] = [
          [1, 1, 6],
          [1, 1, 5],
          [1, 1, 4],
          [1, 1, 3]
        ];
        expect(actual).toEqual(expected);
      });

    });

    describe('pop', () => {

      it('should pop an element from the heap', () => {
        const heap = new Common.Heap(false);

        heap.push([1, 1, 6]);
        heap.push([1, 1, 4]);
        heap.push([1, 1, 5]);
        heap.push([1, 1, 3]);

        const actualElement = heap.pop();
        const actualHeap = heap.asList();

        const expectedElement: [number, number, number] = [1, 1, 6];
        const expectedHeap: [number, number, number][] = [
          [1, 1, 5],
          [1, 1, 4],
          [1, 1, 3]
        ];
        expect(actualElement).toEqual(expectedElement);
        expect(actualHeap).toEqual(expectedHeap)
      });

    });

    describe('peek', () => {

      it('should return the top element without changing the heap', () => {
        const heap = new Common.Heap(false);

        heap.push([1, 1, 6]);
        heap.push([1, 1, 4]);
        heap.push([1, 1, 5]);
        heap.push([1, 1, 3]);

        const heapBefore = heap.asList();
        const actualElement = heap.peek();
        const heapAfter = heap.asList();

        expect(actualElement).toEqual([1, 1, 6]);
        expect(heapBefore).toEqual(heapAfter);
      });

    });

    describe('size', () => {

      it('should return the size of the heap', () => {
        const heap = new Common.Heap(false);

        heap.push([1, 1, 6]);
        heap.push([1, 1, 4]);
        heap.push([1, 1, 5]);
        heap.push([1, 1, 3]);

        const actual = heap.size();

        expect(actual).toEqual(4);
      });

    });

    describe('asList', () => {

      it('should return the heap as a list', () => {
        const heap = new Common.Heap(false);

        heap.push([1, 1, 4]);
        heap.push([1, 1, 3]);
        heap.push([1, 1, 5]);
        heap.push([1, 1, 6]);

        const actual = heap.asList();

        const expected: [number, number, number][] = [
          [1, 1, 6],
          [1, 1, 5],
          [1, 1, 4],
          [1, 1, 3]
        ];
        expect(actual).toEqual(expected);
      });

    });

  });

  describe('replaceInList', () => {

    it('should replace all instances of a number with the new number', () => {
      const listToChange = [4, 7, 89, 4, 6, 8, 3];

      const expected = [8, 7, 89, 8, 6, 8, 3];

      Common.replaceInList(listToChange, 4, 8);

      expect(listToChange).toEqual(expected);
    });

  });

  describe('groups', () => {

    it('should return the groups of numbers', () => {
      const listToGroup = [1, 1, 5, 6, 6, 6, 8, 9, 9, 652, 652];
      const expected = [[1, 1], [5], [6, 6, 6], [8], [9, 9], [652, 652]];

      const actual = Common.groups(listToGroup);

      expect(actual).toEqual(expected);
    });

  });

});