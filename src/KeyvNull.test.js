const KeyvNull = require('./KeyvNull');

describe('KeyvNull', () => {
  describe('KeyvNull methods', () => {
    let sut;

    beforeEach(() => {
      sut = new KeyvNull();
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('get', () => {
      expect.assertions(1);
      expect(sut.get('foo')).toBeUndefined();
    });

    test('set', () => {
      expect.assertions(1);
      expect(sut.set('foo', { bar: true })).toBe(1);
    });

    test('delete', () => {
      expect.assertions(1);
      expect(sut.delete('foo')).toBe(true);
    });

    test('clear', () => {
      expect.assertions(1);
      expect(sut.clear()).toBeUndefined();
    });
  });
});
