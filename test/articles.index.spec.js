import Index from '@/pages/articles/index.vue';
import { mount } from '@vue/test-utils';

describe('Articles', () => {
  it('is a Vue component', () => {
    const wrapper = mount(Index);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('has something', () => {
    const wrapper = mount(Index, {
      data: () => ({
        articles: [{
          title: 'taytl',
          image: null,
        }]
      }),
      stubs: {
        NuxtLink: true,
      },
    });
    expect(wrapper.text()).toContain('taytl')
  });
});