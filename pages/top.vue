<template>
  <div class="top-wrapper">
    <div v-if="$fetchState.pending" class="loading vh-center">Fetching...</div>
    <div v-else-if="$fetchState.error" class="error vh-center">
      <div>Oops, there's been a problem...</div>
      <div>Try refreshing in a few minutes</div>
    </div>
    <ItemsWrapper :items="items" />
  </div>
</template>

<script>
export default {
  async fetch() {
    const ids = await this.$store.dispatch('getTopIds');
    await this.$store.commit('SET_TOP_IDS', ids);
    const items = await this.$store.dispatch('getTwentyItems');
    this.$store.commit('SET_TOP_ITEMS', items);
  },

  computed: {
    ids() {
      return this.$store.state.topIds;
    },
    items() {
      return this.$store.state.topItems;
    },
  },
};
</script>

<style scoped>
.items-wrapper {
  padding: 0 7%;
}
</style>
