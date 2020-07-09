<template>
  <div class="best-wrapper">
    <div v-if="$fetchState.error" class="error vh-center">
      <div>Oops, there's been a problem...</div>
      <div>Try refreshing in a few minutes</div>
    </div>
    <ItemsWrapper v-else :items="items" :current-page="'best'" />
    <Loading v-if="isLoadingMore" :is-fullpage="false" />
  </div>
</template>

<script>
export default {
  async fetch() {
    const store = this.$store;
    const { bestIds, bestItems } = store.state;

    let ids = bestIds;
    if (!bestItems.length) {
      store.commit('START_LOADING');

      if (!ids.length) {
        ids = await store.dispatch('getBestIds');
        await store.commit('SET_BEST_IDS', ids);
      }

      const itemsToFetch = ids.slice(bestItems.length, bestItems.length + 20);
      const items = await store.dispatch('getNextItems', itemsToFetch);
      await store.commit('ADD_BEST_ITEMS', items);

      store.commit('STOP_LOADING');
    }
  },

  computed: {
    items() {
      return this.$store.state.bestItems;
    },
    isLoadingMore() {
      return this.$store.state.isLoading && this.$store.state.bestItems.length;
    },
  },

  mounted() {
    this.scroll();
  },

  methods: {
    scroll() {
      window.onscroll = async () => {
        const store = this.$store;
        const { bestIds, bestItems } = store.state;

        const isAtBottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (isAtBottomOfWindow) {
          store.commit('START_LOADING');

          const itemsToFetch = bestIds.slice(
            bestItems.length,
            bestItems.length + 20
          );
          const items = await store.dispatch('getNextItems', itemsToFetch);
          store.commit('ADD_BEST_ITEMS', items);

          store.commit('STOP_LOADING');
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
