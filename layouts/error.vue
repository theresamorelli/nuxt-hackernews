<template>
  <div class="error vh-center">
    <div>Sorry, there's a problem</div>
    <div>Try again later</div>
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
