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
      'https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty'
    );
    let mostRecentId = res.data;
    while (this.items.length < 10) {
      const res2 = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${mostRecentId}.json?print=pretty`
      );
      if (res2.data.type === 'story') this.items.push(res2.data);
      mostRecentId--;
    }
  },
};
</script>

<style scoped>
.items-wrapper {
  padding: 0 7%;
}
</style>
