<template>
  <div class="best-wrapper">
    <div v-if="$fetchState.pending" class="loading vh-center">Fetching...</div>
    <div v-else-if="$fetchState.error" class="error vh-center">
      <div>Oops, there's been a problem...</div>
      <div>Try refreshing in a few minutes</div>
    </div>
    <ItemsWrapper v-else :items="items" />
  </div>
</template>

<script>
export default {
  async fetch() {
    const ids = await this.$store.dispatch('getBestIds');
    await this.$store.commit('SET_BEST_IDS', ids);
    const items = await this.$store.dispatch('getTwentyItems', 'bestIds');
    this.$store.commit('SET_BEST_ITEMS', items);
  },

  computed: {
    items() {
      return this.$store.state.bestItems;
    },
  },
};
</script>

<style scoped>
.items-wrapper {
  padding: 0 7%;
}
</style>
