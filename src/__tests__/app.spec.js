import { mount } from '@vue/test-utils';
import App from '../App.vue';

describe('App', () => {
  it('has data', () => {
    expect(typeof App.data).toBe('function');
  });
});

describe('Mounted App', () => {
  const wrapper = mount(App);

  test('does a wrapper exist', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
