<template>
    <div class="d-flex justify-center ma-4" v-on:click="flipped = !flipped"
        v-bind:class="flipped ? 'flip-container flipped' : 'flip-container'">
        <v-tooltip top :disabled="$vuetify.breakpoint.mdAndDown">
            <template v-slot:activator="{ on, attrs }">
                <div class="front" v-bind="attrs" v-on="on">
                    <v-card height="100%">
                        <v-img object-fit="cover" :src="cocktail.strDrinkThumb"></v-img>
                        <v-card-title>{{ cocktail.strDrink }}</v-card-title>
                        <v-card-subtitle>{{ cocktail.strCategory }}</v-card-subtitle>
                    </v-card>
                </div>
            </template>
            <span>Cliquez pour voir la recette</span>
        </v-tooltip>

        <div class="back">
            <v-card height="100%">
                <v-card-title> Ingrédients </v-card-title>
                <IngredientList :ingredient-list="cocktail.ingredientList" />
                <v-card-title> Instructions </v-card-title>
                <v-card-text>{{ cocktail.strInstructions }}</v-card-text>
            </v-card>
        </div>
    </div>
</template>


<script>
import IngredientList from './IngredientList.vue';

export default {
    props: ["cocktail"],
    data: function () {
        return {
            flipped: false
        };
    },
    components: { IngredientList }
}
</script>

<style scoped>
.flip-container {
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -o-perspective: 1000;
    perspective: 1000;
    min-height: 120px;
}

.flip-container:hover {
    cursor: pointer;
}

.flipper {
    -moz-transform: perspective(1000px);
    -moz-transform-style: preserve-3d;
    position: relative;
}

.front,
.back {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: 0.6s;
    -webkit-transform-style: preserve-3d;
    -moz-transition: 0.6s;
    -moz-transform-style: preserve-3d;
    -o-transition: 0.6s;
    -o-transform-style: preserve-3d;
    -ms-transition: 0.6s;
    -ms-transform-style: preserve-3d;
    transition: 0.6s;
    transform-style: preserve-3d;
    max-width: 300px;
}

.back {
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    position: absolute;
}

.flip-container.flipped .back {
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    transform: rotateY(0deg);
}

.flip-container.flipped .front {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    transform: rotateY(180deg);
}

.front {
    z-index: 2;
}
</style>