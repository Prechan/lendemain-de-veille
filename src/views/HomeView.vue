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
    CocktailService.getRandomCocktails().then((res) => {
      this.cocktails = res;
    });
  },
  components: { CocktailCard }
}
</script>