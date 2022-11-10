import cocktailServices from '@/services/cocktailServices';

describe('CocktailService', () => {
  const promise = new Promise(() => {});
  const drinkData = {
    idDrink: '13214',
    strAlcoholic: 'Alcoholic',
    strCategory: 'Cocktail',
    strDrink: 'Pisco Sour',
    strDrinkThumb:
      'https://www.thecocktaildb.com/images/media/drink/tsssur1439907622.jpg',
    strGlass: 'Glass',
    strInstructions: 'lorem ipsum',
  };

  const ingredients = {
    strIngredient1: 'Lime',
    strMeasure1: '1 c/sp',
    strIngredient2: 'Vodka',
    strMeasure2: '5 cl',
  };

  const formatedDrinkData = {
    id: '13214',
    isAlcoholic: true,
    category: 'Cocktail',
    name: 'Pisco Sour',
    thumbUrl:
      'https://www.thecocktaildb.com/images/media/drink/tsssur1439907622.jpg',
    glassType: 'Glass',
    instructions: 'lorem ipsum',
    ingredients: [
      {
        measure: '1 c/sp',
        name: 'Lime',
      },
      {
        measure: '5 cl',
        name: 'Vodka',
      },
    ],
  };

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

  describe('formatDrink', () => {
    it('should return formated drink data', () => {
      expect(
        cocktailServices.formatDrink({ ...drinkData, ...ingredients })
      ).toEqual(formatedDrinkData);
    });
  });

  describe('isAlcoholicDrink', () => {
    it('should return true', () => {
      expect(cocktailServices.isAlcoholicDrink('Alcoholic')).toBeTruthy();
    });

    it('should return false', () => {
      expect(cocktailServices.isAlcoholicDrink('Non Alcoholic')).toBeFalsy();
    });
  });

  describe('getDrinkIngredients', () => {
    it('should return empty array', () => {
      expect(cocktailServices.getDrinkIngredients(drinkData).length).toEqual(0);
    });

    it('should return formated ingredients', () => {
      const formatedIngredients = cocktailServices.getDrinkIngredients({
        ...drinkData,
        ...ingredients,
      });
      expect(formatedIngredients.length).toEqual(2);
      expect(formatedIngredients).toEqual(formatedDrinkData.ingredients);
    });
  });
});
