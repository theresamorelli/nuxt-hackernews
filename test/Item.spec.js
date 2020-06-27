import { shallowMount } from '@vue/test-utils';
import Item from '@/components/Item';

describe('Item', () => {
  const wrapper = shallowMount(Item, {
    propsData: {
      'item-id': 123456,
      title: 'Test Title',
      author: 'me',
      kids: [234567, 345678],
      score: 12,
      time: 1593190787,
      url: 'https://www.google.com',
    },
  });
  test('renders title with link', () => {
    expect(wrapper.text()).toContain('Test Title');
  });
  const a = wrapper.find('a');
  test('displays link', () => {
    expect(a.attributes().href).toBe('https://www.google.com');
  });
});
