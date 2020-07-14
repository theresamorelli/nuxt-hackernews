<template>
  <Page current="top" :items="topItems" />
</template>

<script>
import Page from '@/components/Page';
export default {
  components: {
    Page,
  },
  async fetch() {
    const store = this.$store;

    let ids = this.topIds;
    if (!this.topItems.length) {
      store.commit('START_LOADING');

      // if no ids, get then set in store
      if (!this.topIds.length) {
        ids = await store.dispatch('getTopIds');
        await store.commit('SET_TOP_IDS', ids);
      }

      // call for 10 items and add to store
      const itemsToFetch = ids.slice(
        this.topItems.length,
        this.topItems.length + 10
      );
      const items = await store.dispatch('getNextItems', itemsToFetch);
      store.commit('ADD_TOP_ITEMS', items);

      store.commit('STOP_LOADING');
    }
  },

  computed: {
    topIds() {
      return this.$store.getters.topIds;
    },
    topItems() {
      return this.$store.getters.topItems;
    },
  },
};
</script>
