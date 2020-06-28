<template>
  <div>
    <ItemsWrapper :news="news" />
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
      news: [],
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
      this.news.push(res2.data);
    }
    console.log('this.news', this.news);
  },
};
</script>

<style scoped>
.items-wrapper {
  padding: 0 7%;
}
</style>
