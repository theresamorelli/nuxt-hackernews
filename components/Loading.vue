<template>
  <div class="loading" :class="isFullpage ? 'vh-center' : 'some-loaded'">
    Loading...
  </div>
</template>

<script>
export default {
  props: ['isFullpage'],
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>
