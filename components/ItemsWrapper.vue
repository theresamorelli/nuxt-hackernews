<template>
  <div class="items-wrapper">
    <div v-if="!items || items.length === 0" class="error vh-center">
      No stories found. Try again later
    </div>
    <Item
      v-else
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
export default {
  props: ['items'],
};
</script>
