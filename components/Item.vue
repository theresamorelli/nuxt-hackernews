<template>
  <div class="item">
    <div class="title">
      <a :href="url">{{ title }}</a>
    </div>
    <div class="author">by: {{ author }}</div>
  </div>
</template>

<script>
export default {
  props: ['item-id', 'title', 'author', 'kids', 'score', 'time', 'url'],
};
</script>

<style scoped>
.title {
  font-size: 1.7rem;
  margin: 0;
}

.author {
  font-size: 1.2rem;
}
</style>
