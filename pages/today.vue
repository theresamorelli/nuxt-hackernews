<template>
  <div class="today-wrapper">
    <div v-if="$fetchState.pending" class="loading">Fetching...</div>
    <div v-else-if="$fetchState.error" class="error">
      <div>Oops, there's been a problem...</div>
      <div>Try refreshing in a few minutes</div>
    </div>
    <ItemsWrapper v-else :items="items" />
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
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy="$key"&limitToFirst=10'
    );

    for (const item of res.data) {
      const res = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`
      );
      this.items.push(res.data);
    }
  },

  data() {
    return {
      items: [],
      quote: null,
    };
  },
};
</script>

<style scoped>
.items-wrapper {
  padding: 0 7%;
}
</style>
