<template>
  <div>
    <header>
      <h1>Top Ten</h1>
    </header>
    <div class="stories-wrapper">
      <Item
        v-for="(item, i) in news"
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
    <div class="news-wrapper"></div>
  </div>
</template>

<script>
import axios from 'axios';
import Item from '@/components/Item.vue';

export default {
  components: {
    Item,
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
header {
  margin: 25px 0;
  text-align: center;
  font-size: 3rem;
}

.stories-wrapper {
  padding: 0 7%;
}
</style>
