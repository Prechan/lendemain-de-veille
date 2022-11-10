import cocktailServices from '@/services/cocktailServices';

describe('CocktailService', () => {
  const promise = new Promise(() => {});

  describe('getCocktailPromises', () => {
    it('should return empty', () => {
      expect(cocktailServices.getCocktailPromises(0)).toEqual([]);
    });

    it('should return one element', () => {
      const expectedValue = [promise];
      expect(cocktailServices.getCocktailPromises(1)).toEqual(expectedValue);
    });

    it('should return several', () => {
      const expectedValue = [promise, promise, promise];
      expect(
        cocktailServices.getCocktailPromises(expectedValue.length)
      ).toEqual(expectedValue);
    });
  });

  describe('getRandomCocktails', () => {
    it('should return a promise', () => {
      expect(cocktailServices.getRandomCocktails()).toEqual(promise);
    });
  });
});
