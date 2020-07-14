<template>
  <div :class="wrapperClass">
    <div v-if="error" class="error vh-center">
      <div>Oops, there's been a problem...</div>
      <div>Try refreshing in a few minutes</div>
    </div>
    <ItemsWrapper v-else :items="items" :current-page="current" />
    <Loading v-if="isLoadingMore" :is-fullpage="false" />
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'Page',
  props: {
    current: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    error: Boolean,
  },

  computed: {
    wrapperClass() {
      return this.current + '-wrapper';
    },
    isLoadingMore() {
      return (
        this.$store.getters.isLoading &&
        this.$store.getters[`${this.current}Items`].length
      );
    },
  },

  mounted() {
    this.scroll();
  },

  methods: {
    scroll() {
      window.onscroll = _.throttle(
        () => {
          const isAtBottomOfWindow =
            document.documentElement.scrollTop + window.innerHeight ===
            document.documentElement.offsetHeight;
          if (isAtBottomOfWindow) {
            this.loadItems();
          }
        },
        500,
        { leading: true }
      );
    },
    async loadItems() {
      const store = this.$store;
      store.commit('START_LOADING');

      const ids = store.getters[`${this.current}Ids`];
      const currentItems = store.getters[`${this.current}Items`];
      const itemIdsToFetch = ids.slice(
        currentItems.length,
        currentItems.length + 10
      );

      const nextItems = await store.dispatch('getNextItems', itemIdsToFetch);
      await store.commit(`ADD_${this.current.toUpperCase()}_ITEMS`, nextItems);

      store.commit('STOP_LOADING');
    },
  },
};
</script>
