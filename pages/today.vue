<template>
  <div>
    <ItemsWrapper :items="items" />
  </div>
</template>

<script>
import axios from 'axios';
import ItemsWrapper from '@/components/ItemsWrapper';

export default {
  components: {
    ItemsWrapper,
  },

  data() {
    return {
      items: [],
      quote: null,
    };
  },

  async mounted() {
    const res = await axios.get(
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy="$key"&limitToFirst=10'
    );
    for (const item of res.data) {
      const res2 = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`
      );
      this.items.push(res2.data);
    }
    console.log('this.items', this.items);
  },
};
</script>

<style scoped>
.items-wrapper {
  padding: 0 7%;
}
</style>
