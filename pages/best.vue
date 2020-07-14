<template>
  <Page current="best" :items="bestItems" />
</template>

<script>
import Page from '@/components/Page';
export default {
  components: {
    Page,
  },

  async fetch() {
    const store = this.$store;

    if (!this.bestItems.length) {
      store.commit('START_LOADING');

      let ids = this.bestIds;
      if (!this.bestIds.length) {
        ids = await store.dispatch('getBestIds');
        await store.commit('SET_BEST_IDS', ids);
      }

      const itemsToFetch = ids.slice(
        this.bestItems.length,
        this.bestItems.length + 10
      );
      const items = await store.dispatch('getNextItems', itemsToFetch);
      await store.commit('ADD_BEST_ITEMS', items);

      store.commit('STOP_LOADING');
    }
  },

  computed: {
    bestIds() {
      return this.$store.getters.bestIds;
    },
    bestItems() {
      return this.$store.getters.bestItems;
    },
  },
};
</script>
