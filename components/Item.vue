<template>
  <div class="item">
    <div class="ranking">{{ index + 1 }}</div>
    <div>
      <div class="title">
        <a :href="url">{{ title }}</a>
      </div>
      <span>{{ time | moment('from', 'now') }}</span>
      <span><i class="score fa fa-heart"></i>{{ score }}</span>
      <span class="author"><i class="fa fa-user"></i>{{ author }}</span>
      <span class="comments"
        ><i class="fa fa-comment"></i>{{ numComments }}</span
      >
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
Vue.use(require('vue-moment'));
export default {
  props: [
    'item-id',
    'index',
    'title',
    'author',
    'kids',
    'score',
    'time',
    'url',
  ],
  computed: {
    numComments() {
      return this.kids ? this.kids.length : 0;
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px;
  border-radius: 10px;
  cursor: pointer;
  background: var(--teal);
  margin: 20px;
}

.item:hover {
  background: var(--teal-dimmed);
  transition: all 0.5s;
}

.ranking {
  font-size: 2rem;
  margin-left: 20px;
  margin-right: 35px;
}

.fa {
  margin-right: 8px;
}

span {
  margin-right: 20px;
}

.score {
  color: red;
}

a {
  color: var(--yellow);
}

.title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}
</style>
