import { shallowMount } from '@vue/test-utils';
import ItemsWrapper from '@/components/ItemsWrapper';

describe('ItemsWrapper', () => {
  const wrapper = shallowMount(ItemsWrapper, {
    propsData: {
      items: [
        {
          id: 1,
          title: 'Testing',
          by: 'Joe Schmoe',
          url: 'https://www.google.com',
          kids: [1, 2, 3],
          score: 11,
          time: 1593121697,
        },
      ],
    },
  });
  test('renders items-wrapper', () => {
    expect(wrapper.classes()).toContain('items-wrapper');
  });

  const noItemsWrapper = shallowMount(ItemsWrapper, {
    propsData: {
      items: [],
    },
  });
  test('renders no-items message', () => {
    const errorNode = noItemsWrapper.find('.error');
    expect(errorNode.text()).toContain('No stories found');
  });
});
