import { mount } from '@vue/test-utils';
import CocktailCard from '../CocktailCard.vue';
import Vuetify from 'vuetify';

const vuetify = new Vuetify();

describe('CocktailCard', () => {
  const cocktail = {
    id: '13214',
    isAlcoholic: true,
    category: 'Cocktail',
    name: 'Pisco Sour',
    thumbUrl:
      'https://www.thecocktaildb.com/images/media/drink/tsssur1439907622.jpg',
    glassType: 'Glass',
    instructions: 'lorem ipsum',
    ingredients: [],
  };

  it('should be a vue instance', () => {
    const wrapper = mount(CocktailCard, {
      propsData: {
        cocktail,
      },
      vuetify,
    });

    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('should renders cocktail values', () => {
    const wrapper = mount(CocktailCard, {
      propsData: {
        cocktail,
      },
      vuetify,
    });

    expect(wrapper.html()).toContain(cocktail.name);
    expect(wrapper.html()).toContain(cocktail.category);
    expect(wrapper.html()).toContain(cocktail.instructions);
    expect(wrapper.find('img')).toBeDefined();
  });

  it('should flip the card', async () => {
    const wrapper = mount(CocktailCard, {
      propsData: {
        cocktail,
      },
      vuetify,
    });

    expect(wrapper.vm.flipped).toBeFalsy();

    await wrapper.find('.flip-container').trigger('click');

    expect(wrapper.vm.flipped).toBeTruthy();
  });
});
