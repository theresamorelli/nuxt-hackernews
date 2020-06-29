<template>
  <div class="today-wrapper">
    <ItemsWrapper :items="items" />
    <div
      v-if="$fetchState.pending"
      class="loading vh-center"
      :class="{ 'some-loaded': someItemsLoaded }"
    >
      Fetching...
    </div>
    <div v-else-if="$fetchState.error" class="error vh-center">
      <div>Oops, there's been a problem...</div>
      <div>Try refreshing in a few minutes</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ItemsWrapper from '@/components/ItemsWrapper';

export default {
  components: {
    ItemsWrapper,
  },

  async fetch() {
    const res = await axios.get(
      'https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty'
    );
    let mostRecentId = res.data;

    while (this.items.length < 10) {
      const res = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${mostRecentId}.json?print=pretty`
      );

      if (res.data.type === 'story') {
        if (!res.data.dead) {
          this.items.push(res.data);
        }
      }
      mostRecentId--;
    }
  },

  data() {
    return {
      items: [],
      quote: null,
    };
  },

  computed: {
    someItemsLoaded() {
      return this.items.length > 0;
    },
  },
};
</script>

<style scoped>
.items-wrapper {
  padding: 0 7%;
}

.loading.some-loaded {
  min-height: 0;
}
</style>
