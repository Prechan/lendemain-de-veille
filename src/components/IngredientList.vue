<template>
    <v-list>
        <v-list-item v-for="ingredient in ingredientList" :key="ingredient.name">
            <v-list-item-avatar>
                <v-img :src="`https://www.thecocktaildb.com/images/ingredients/${ingredient.name}.png`"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title v-text="ingredient.name"></v-list-item-title>
                <v-list-item-action-text v-text="ingredient.measure"></v-list-item-action-text>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    props: ['ingredientList']
}
</script>