<template>
  <div class="top-wrapper">
    <div v-if="$fetchState.error" class="error vh-center">
      <div>Oops, there's been a problem...</div>
      <div>Try refreshing in a few minutes</div>
    </div>
    <ItemsWrapper v-else :items="items" :current-page="'top'" />
    <Loading v-if="isLoadingMore" :is-fullpage="false" />
  </div>
</template>

<script>
export default {
  async fetch() {
    const store = this.$store;
    const { topIds, topItems } = store.state;

    let ids = topIds;
    if (!topItems.length) {
      store.commit('START_LOADING');

      // if no ids, get then set in store
      if (!topIds.length) {
        ids = await store.dispatch('getTopIds');
        await store.commit('SET_TOP_IDS', ids);
      }

      // call for 20 items and add to store
      const itemsToFetch = ids.slice(topItems.length, topItems.length + 20);
      const items = await store.dispatch('getNextItems', itemsToFetch);
      store.commit('ADD_TOP_ITEMS', items);

      store.commit('STOP_LOADING');
    }
  },

  computed: {
    items() {
      return this.$store.state.topItems;
    },
    isLoadingMore() {
      return this.$store.state.isLoading && this.$store.state.topItems.length;
    },
  },

  mounted() {
    this.scroll();
  },

  methods: {
    scroll() {
      // infinite scroll
      window.onscroll = async () => {
        const store = this.$store;
        const { topIds, topItems } = store.state;

        const isAtBottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (isAtBottomOfWindow) {
          store.commit('START_LOADING');

          const itemsToFetch = topIds.slice(
            topItems.length,
            topItems.length + 20
          );
          const items = await store.dispatch('getNextItems', itemsToFetch);
          store.commit('ADD_TOP_ITEMS', items);

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
