<template>
  <div>
    <header>
      <h1>Top Ten</h1>
    </header>
    <div>
      <div v-for="item in news" :key="item.id" class="story">
        <div class="title">{{ item.title }}</div>
        <div class="author">by: {{ item.by }}</div>
      </div>
    </div>
    <div class="news-wrapper"></div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
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

.story {
  margin: 10px 0;
}

.title {
  font-size: 1.7rem;
  margin: 0;
}

.author {
  font-size: 1.2rem;
}

img {
  width: 100%;
}
</style>
