import { mount } from '@vue/test-utils';
import IngredientList from '../IngredientList.vue';
import Vuetify from 'vuetify';

const vuetify = new Vuetify();

describe('IngredientList', () => {
  const ingredients = [
    {
      measure: '1 c/sp',
      name: 'Lime',
    },
    {
      measure: '5 cl',
      name: 'Vodka',
    },
  ];

  it('should be a vue instance', () => {
    const wrapper = mount(IngredientList, {
      propsData: {
        ingredients,
      },
      vuetify,
    });

    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('should renders cocktail values', () => {
    const wrapper = mount(IngredientList, {
      propsData: {
        ingredients: ingredients,
      },
      vuetify,
    });

    expect(wrapper.findAll('.v-list-item').length).toEqual(ingredients.length);
  });
});
