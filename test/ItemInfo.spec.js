import { shallowMount } from '@vue/test-utils';
import ItemInfo from '@/components/ItemInfo';

describe('ItemInfo', () => {
  const wrapper = shallowMount(ItemInfo, {
    propsData: {
      faIcon: 'fa fa-clock',
      text: '5 minutes ago',
    },
  });
  test('renders icon', () => {
    expect(wrapper.contains('i')).toBe(true);
    const i = wrapper.find('i');
    expect(i.classes()).toContain('fa-clock');
  });
  test('renders text', () => {
    const text = wrapper.find('.text');
    expect(text.text()).toContain('5 minutes ago');
  });
});
