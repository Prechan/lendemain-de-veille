<template>
  <div class="home pa-8">
    <h1>Garçon !</h1>
    <div class="d-flex flex-wrap mb-6">
      <CocktailCard v-for="cocktail in this.cocktails" :key="cocktail.idDrink" :cocktail=cocktail />
    </div>
  </div>
</template>

<script>
import CocktailCard from '@/components/CocktailCard.vue';
import CocktailService from '../services/CocktailServices';

export default {
  data: () => ({
    cocktails: [],
  }),
  mounted() {
    this.cocktails = [{
      "idDrink": "13202",
      "strDrink": "Flaming Dr. Pepper",
      "strDrinkAlternate": null,
      "strTags": null,
      "strVideo": null,
      "strCategory": "Shot",
      "strIBA": null,
      "strAlcoholic": "Alcoholic",
      "strGlass": "Collins Glass",
      "strInstructions": "Add Amaretto, Bacardi, and vodka. Mix in the Dr. Pepper and beer",
      "strInstructionsES": null,
      "strInstructionsDE": "Amaretto, Bacardi und Wodka vermengen. Dr. Pepper und Bier unterrühren.",
      "strInstructionsFR": null,
      "strInstructionsIT": "Aggiungi Amaretto, Bacardi e vodka.Mescolare il Dr. Pepper e la birra",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/d30z931503565384.jpg",
      "strIngredient1": "Amaretto",
      "strIngredient2": "Vodka",
      "strIngredient3": "151 proof rum",
      "strIngredient4": "Dr. Pepper",
      "strIngredient5": "Beer",
      "strIngredient6": null,
      "strIngredient7": null,
      "strIngredient8": null,
      "strIngredient9": null,
      "strIngredient10": null,
      "strIngredient11": null,
      "strIngredient12": null,
      "strIngredient13": null,
      "strIngredient14": null,
      "strIngredient15": null,
      "strMeasure1": "1 oz ",
      "strMeasure2": "1 oz ",
      "strMeasure3": "1 oz Bacardi ",
      "strMeasure4": "1 oz ",
      "strMeasure5": "1 oz ",
      "strMeasure6": null,
      "strMeasure7": null,
      "strMeasure8": null,
      "strMeasure9": null,
      "strMeasure10": null,
      "strMeasure11": null,
      "strMeasure12": null,
      "strMeasure13": null,
      "strMeasure14": null,
      "strMeasure15": null,
      "strImageSource": null,
      "strImageAttribution": null,
      "strCreativeCommonsConfirmed": "No",
      "dateModified": "2017-08-24 10:03:04",
      "ingredientList": [
        {
          "name": "Amaretto",
          "measure": "1 oz "
        },
        {
          "name": "Vodka",
          "measure": "1 oz "
        },
        {
          "name": "151 proof rum",
          "measure": "1 oz Bacardi "
        },
        {
          "name": "Dr. Pepper",
          "measure": "1 oz "
        },
        {
          "name": "Beer",
          "measure": "1 oz "
        }
      ]
    }]
  },
  components: { CocktailCard }
}
</script>