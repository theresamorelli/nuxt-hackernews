<template>
  <div class="items-wrapper">
    <Item
      v-for="(item, i) in items"
      :key="item.id"
      class="story"
      :index="i"
      :item-id="item.id"
      :title="item.title"
      :author="item.by"
      :url="item.url"
      :kids="item.kids"
      :score="item.score"
      :time="item.time"
    />
  </div>
</template>

<script>
import Item from '@/components/Item';
export default {
  props: ['items'],
};
</script>
