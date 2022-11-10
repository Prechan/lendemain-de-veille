import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/';

export default {
  async getRandomCocktails(number = 3) {
    const promises = this.getCocktailPromises(number);

    return Promise.all(promises).then((responses) => {
      const drinks = responses.map((response) =>
        this.formatDrink(response.data.drinks[0])
      );

      return drinks;
    });
  },

  getCocktailPromises(number) {
    let promises = [];

    for (let i = 0; i < number; i++) {
      promises.push(axios.get(url + 'random.php'));
    }

    return promises;
  },

  formatDrink(drinkData) {
    return {
      id: drinkData.idDrink,
      isAlcoholic: this.isAlcoholicDrink(drinkData.strAlcoholic),
      category: drinkData.strCategory,
      name: drinkData.strDrink,
      thumbUrl: drinkData.strDrinkThumb,
      glassType: drinkData.strGlass,
      instructions: drinkData.strInstructions,
      ingredients: this.getDrinkIngredients(drinkData),
    };
  },

  isAlcoholicDrink(alcoholicType) {
    return alcoholicType === 'Alcoholic';
  },

  getDrinkIngredients(drinkData) {
    const objectIngredientKey = 'strIngredient';
    const objectMeasureKey = 'strMeasure';

    return Object.entries(drinkData)
      .filter(([key, value]) => key.includes(objectIngredientKey) && value)
      .map(([key, value]) => {
        const ingredientNumber = key.split(objectIngredientKey)[1];
        const ingredientMeasure =
          drinkData[`${objectMeasureKey}${ingredientNumber}`];

        return {
          name: value,
          measure: ingredientMeasure || '',
        };
      });
  },
};
