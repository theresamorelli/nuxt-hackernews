<template>
  <div class="items-wrapper">
    <Loading v-if="isLoadingFirst" :is-fullpage="true" />
    <div v-if="!items.length === 0" class="error vh-center">
      No stories found. Try again later
    </div>
    <Item
      v-else
      v-for="(item, i) in items"
      :key="i"
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
  props: ['items', 'currentPage'],
  computed: {
    isLoadingFirst() {
      const { isLoading, topItems, bestItems } = this.$store.state;

      if (isLoading) {
        if (this.currentPage === 'top') {
          return !topItems.length;
        } else if (this.currentPage === 'best') {
          return !bestItems.length;
        }
      }
      return false;
    },
  },
};
</script>
