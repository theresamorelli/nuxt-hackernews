<template>
  <div class="today-wrapper">
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
    const ids = await this.$store.dispatch('getIds');
    this.$store.commit('SET_IDS', ids);
  },

  computed: {
    ids() {
      return this.$store.state.ids;
    },
  },
};
</script>

<style scoped>
.items-wrapper {
  padding: 0 7%;
}
</style>
