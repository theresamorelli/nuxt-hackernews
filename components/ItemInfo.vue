<template>
  <span class="item-info">
    <i :class="faIcon"></i><span class="text">{{ text }}</span>
  </span>
</template>

<script>
export default {
  props: ['faIcon', 'text'],
};
</script>

<style>
.item-info {
  margin-right: 20px;
  font-family: var(--accent-font);
  font-size: 1rem;
}

.item-info {
  color: #d8d8d8c9;
}

i {
  margin-right: 8px;
  color: #d8d8d8;
}
</style>
