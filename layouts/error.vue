<template>
  <div class="error vh-center">
    <div>Sorry, there's a problem</div>
    <div>Try clicking one of the links above</div>
  </div>
</template>

<script>
export default {
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
};
</script>
