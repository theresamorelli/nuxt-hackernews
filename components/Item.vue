<template>
  <div class="item">
    <div class="position">{{ index + 1 }}</div>
    <div>
      <div class="article-title">
        <a :href="url" target="_blank">{{ title }}</a>
      </div>
      <ItemInfo fa-icon="fa fa-heart" :text="score" />
      <ItemInfo fa-icon="fa fa-comment" :text="numComments" />
      <ItemInfo fa-icon="fa fa-clock" :text="time | moment('from', 'now')" />
      <ItemInfo fa-icon="fa fa-user" :text="author" />
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
  background: var(--dark-teal);
  margin: 20px 0;
}

.item:first-of-type {
  margin-top: 0;
}

.position {
  font-size: 1.5rem;
  color: #909090b8;
  margin-left: 20px;
  margin-right: 35px;
}

a {
  color: var(--yellow);
  transition: all 0.5s ease;
}

a:hover {
  color: orange;
}

.article-title {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 10px;
}
</style>
