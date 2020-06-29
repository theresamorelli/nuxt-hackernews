<template>
  <div class="error">
    <div>Sorry, there's a problem</div>
    <div>Try refeshing!</div>
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

