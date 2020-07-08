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
    // get ids and set in store
    const ids = await this.$store.dispatch('getBestIds');
    await this.$store.commit('SET_BEST_IDS', ids);

    // call for first twenty items by id and add to store
    const itemsToGet = this.$store.state.bestIds.slice(
      this.$store.state.bestItems.length,
      this.$store.state.bestItems.length + 20
    );
    const items = await this.$store.dispatch('getNextItems', itemsToGet);
    this.$store.commit('ADD_BEST_ITEMS', items);
  },

  computed: {
    items() {
      return this.$store.state.bestItems;
    },
  },

  mounted() {
    this.scroll();
  },

  methods: {
    scroll() {
      window.onscroll = async () => {
        const isAtBottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (isAtBottomOfWindow) {
          const itemsToGet = this.$store.state.bestIds.slice(
            this.$store.state.bestItems.length,
            this.$store.state.bestItems.length + 20
          );
          const items = await this.$store.dispatch('getNextItems', itemsToGet);
          this.$store.commit('ADD_BEST_ITEMS', items);
        }
      };
    },
  },
};
</script>

<style scoped>
.items-wrapper {
  padding: 0 7%;
}
</style>
