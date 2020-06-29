<template>
  <div class="error-message-wrapper">
    <div class="error-message">Sorry, there's a problem</div>
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

<style scoped>
.error-message-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--red-error);
  font-size: 1.7rem;
  height: calc(70vh);
}
</style>
